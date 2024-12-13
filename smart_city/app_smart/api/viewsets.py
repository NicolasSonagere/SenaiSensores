from django.contrib.auth.models import User
from rest_framework import generics, permissions
from app_smart.api import serializers
from rest_framework.response import Response
from rest_framework import status
from app_smart.api.filters import SensorFilter, TemperaturaDataFilter, UmidadeFilterView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from app_smart.api.serializers import CsvUploadSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from ..models import Sensor, TemperaturaData, UmidadeData, LuminosidadeData, ContadorData
from rest_framework import viewsets
import io
import csv

class CreateUserAPIViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
 
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    # permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter

from django.contrib.auth.models import User
from rest_framework import generics, permissions, status, viewsets
from app_smart.api import serializers
from rest_framework.response import Response
from app_smart.api.filters import SensorFilter, TemperaturaDataFilter
from django_filters.rest_framework import DjangoFilterBackend
from app_smart.api.serializers import CsvUploadSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from ..models import Sensor, TemperaturaData, UmidadeData, LuminosidadeData, ContadorData
import io
import csv


class CreateUserAPIViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter


class upload_csv_view(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = CsvUploadSerializer(data=request.data)
        print(request.FILES)
        if serializer.is_valid():
            file = request.data.get('file')
            table = request.data.get('table')
            if file is None or table is None:
                return Response({"error": "Arquivo ou tabela não fornecidos."}, status=status.HTTP_400_BAD_REQUEST)

            if not file.name.endswith('.csv'):
                return Response({"error": "Extensão do arquivo diferente de CSV."}, status=status.HTTP_400_BAD_REQUEST)

            decoded_file = file.read().decode('utf-8', errors='replace')
            io_string = io.StringIO(decoded_file)
            reader = csv.DictReader(io_string, delimiter=',')

            # Verifica se a tabela informada é válida
            tabelas_validas = ['sensores', 'temperatura', 'umidade', 'luminosidade', 'contador']
            if table not in tabelas_validas:
                return Response({"error": "Tabela desconhecida."}, status=status.HTTP_400_BAD_REQUEST)

            for row in reader:
                sensor_mac_address = row.get('mac_address')
                sensor = Sensor.objects.filter(mac_address=sensor_mac_address).first()

                if table == 'sensores':
                    try:
                        Sensor.objects.create(
                            tipo=row.get('tipo', ''),
                            unidade_medida=row.get('unidade_medida', None),
                            latitude=float(row['latitude'].replace(',', '.')) if row.get('latitude') else None,
                            longitude=float(row['longitude'].replace(',', '.')) if row.get('longitude') else None,
                            localizacao=row.get('localizacao', ''),
                            responsavel=row.get('responsavel', ''),
                            status_operacional=True if row.get('status_operacional') == 'True' else False,
                            observacao=row.get('observacao', ''),
                            mac_address=row.get('mac_address', None)
                        )
                    except KeyError as e:
                        print(f"Chave não encontrada: {e} na linha: {row}")

                elif table == 'temperatura':
                    try:
                        if sensor:
                            TemperaturaData.objects.create(
                                sensor=sensor,
                                valor=float(row['valor'].replace(',', '.')) if row.get('valor') else None,
                                timestamp=row.get('timestamp', None)
                            )
                        else:
                            print(f"Sensor não encontrado para linha: {row}")
                    except KeyError as e:
                        print(f"Chave não encontrada: {e} na linha: {row}")

                elif table == 'umidade':
                    try:
                        if sensor:
                            UmidadeData.objects.create(
                                sensor=sensor,
                                valor=float(row['valor'].replace(',', '.')) if row.get('valor') else None,
                                timestamp=row.get('timestamp', None)
                            )
                        else:
                            print(f"Sensor não encontrado para linha: {row}")
                    except KeyError as e:
                        print(f"Chave não encontrada: {e} na linha: {row}")

                elif table == 'luminosidade':
                    try:
                        if sensor:
                            LuminosidadeData.objects.create(
                                sensor=sensor,
                                valor=float(row['valor'].replace(',', '.')) if row.get('valor') else None,
                                timestamp=row.get('timestamp', None)
                            )
                        else:
                            print(f"Sensor não encontrado para linha: {row}")
                    except KeyError as e:
                        print(f"Chave não encontrada: {e} na linha: {row}")

                elif table == 'contador':
                    try:
                        if sensor:
                            ContadorData.objects.create(
                                sensor=sensor,
                                timestamp=row.get('timestamp', None)
                            )
                        else:
                            print(f"Sensor não encontrado para linha: {row}")
                    except KeyError as e:
                        print(f"Chave não encontrada: {e} na linha: {row}")

            return Response({"message": "Dados importados com sucesso!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TemperaturaDataViewSet(viewsets.ModelViewSet):
    queryset = TemperaturaData.objects.all()
    serializer_class = serializers.TemperaturaDataSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = TemperaturaDataFilter


class UmidadeDataViewSet(viewsets.ModelViewSet):
    queryset = UmidadeData.objects.all()
    serializer_class = serializers.UmidadeDataSerializer


class LuminosidadeDataViewSet(viewsets.ModelViewSet):
    queryset = LuminosidadeData.objects.all()
    serializer_class = serializers.LuminosidadeDataSerializer


class ContadorDataViewSet(viewsets.ModelViewSet):
    queryset = ContadorData.objects.all()
    serializer_class = serializers.ContadorDataSerializer
