import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
import { getSensores } from '../api/sensor'; // Ajuste o caminho

const Grafico = ({ className }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [seriesData, setSeriesData] = useState([0, 0, 0, 0]); 
    // Indexes: [Temperatura, Umidade, Contador, Luminosidade]

    const options = {
        chart: {
            type: 'pie',
            background: 'transparent'
        },
        series: seriesData,
        labels: ['Temperatura', 'Umidade', 'Contador', 'Luminosidade'],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        legend: {
            position: 'bottom',
            offsetY: 0,
            labels: {
                colors: 'white'
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            color: 'white'
                        },
                        value: {
                            color: 'white'
                        }
                    }
                }
            }
        }
    };

    useEffect(() => {
        // Buscar dados dos sensores
        const fetchSensores = async () => {
            try {
                const data = await getSensores(); 
                // Supondo que data seja uma lista de sensores com { tipo: 'Temperatura' | 'Umidade' | 'Contador' | 'Luminosidade', ... }

                // Contar quantos sensores de cada tipo
                let countTemperatura = 0;
                let countUmidade = 0;
                let countContador = 0;
                let countLuminosidade = 0;

                data.forEach(sensor => {
                    switch (sensor.tipo) {
                        case 'Temperatura':
                            countTemperatura++;
                            break;
                        case 'Umidade':
                            countUmidade++;
                            break;
                        case 'Contador':
                            countContador++;
                            break;
                        case 'Luminosidade':
                            countLuminosidade++;
                            break;
                        default:
                            break;
                    }
                });

                const total = countTemperatura + countUmidade + countContador + countLuminosidade;
                if (total > 0) {
                    // Calcular porcentagens
                    const percTemperatura = (countTemperatura / total) * 100;
                    const percUmidade = (countUmidade / total) * 100;
                    const percContador = (countContador / total) * 100;
                    const percLuminosidade = (countLuminosidade / total) * 100;

                    // Atualizar o estado da série
                    setSeriesData([percTemperatura, percUmidade, percContador, percLuminosidade]);
                } else {
                    // Caso não existam sensores, deixar tudo zero
                    setSeriesData([0, 0, 0, 0]);
                }

            } catch (error) {
                console.error('Erro ao buscar sensores:', error);
            }
        };

        fetchSensores();
    }, []);

    useEffect(() => {
        // Quando o componente monta ou a série muda, renderizar ou atualizar o gráfico
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        if (chartRef.current) {
            const updatedOptions = { ...options, series: seriesData };
            chartInstanceRef.current = new ApexCharts(chartRef.current, updatedOptions);
            chartInstanceRef.current.render();
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [seriesData]); // Re-renderiza o chart quando os dados da série mudam

    return (
        <div className={`chart-container ${className}`}>
            <div ref={chartRef} />
        </div>
    );
};

export default Grafico;
