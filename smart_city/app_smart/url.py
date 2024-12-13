from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from app_smart.api.filters import SensorFilterView, TemperaturaFilterView, UmidadeFilterView, LuminosidadeFilterView, ContadorFilterView
from app_smart.api.viewsets import (
    SensorViewSet,
    CreateUserAPIViewSet,
    TemperaturaDataViewSet,
    UmidadeDataViewSet,
    ContadorDataViewSet,
    LuminosidadeDataViewSet,
    upload_csv_view
)

router = DefaultRouter()
router.register(r'sensores', SensorViewSet)
router.register(r'temperatura', TemperaturaDataViewSet)
router.register(r'umidade', UmidadeDataViewSet)
router.register(r'contador', ContadorDataViewSet)
router.register(r'luminosidade', LuminosidadeDataViewSet)


urlpatterns = [
 path('', views.abre_index, name='abre_index'),
 path('api/create_user/', CreateUserAPIViewSet.as_view(), name='create_user'),
 path('api/', include(router.urls)),
 path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
 path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
 path('api/upload_csv/', upload_csv_view.as_view(), name='upload_csv'),
 path('api/sensor_filter/', SensorFilterView.as_view(), name='sensor_filter'),
 path('api/temperatura_filter/', TemperaturaFilterView.as_view(), name='temperatura_filter'),
 path('api/umidade_filter/', UmidadeFilterView.as_view(), name='umidade_filter'),
 path('api/luminosidade_filter/', LuminosidadeFilterView.as_view(), name='luminosidade_filter'),
 path('api/contador_filter/', ContadorFilterView.as_view(), name='contador_filter'),
]

