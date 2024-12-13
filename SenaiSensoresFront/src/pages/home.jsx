import React from 'react';
import Navbar from "../components/navbar";
import Grafico from "../components/grafico";
import sensor1 from '../assets/sensor1.png';
import senai from '../assets/senai.png';

const Home = () => {
    return (
        <div className="bg-[#242424] min-h-screen">
            <Navbar />
            
            {/* Explicação sensores */}
            <section className="w-[90%] mx-auto mt-8">
                <h1 className="text-white text-2xl font-bold mb-6 relative">
                    <span className="pl-3 relative">O que são sensores?</span>
                    <span className="absolute left-0 bottom-0 w-[4px] h-full bg-white"></span>
                </h1>
                <div className="bg-[#333333] p-6 flex flex-col sm:flex-row items-center sm:items-start rounded-lg shadow-lg">
                    <p className="text-white mb-4 sm:mb-0 sm:mr-6 sm:w-3/3 text-sm sm:text-base leading-relaxed">
                    Sensores são dispositivos criados para detectar, medir e responder a mudanças ou estímulos no ambiente ao seu redor. Eles podem captar diferentes tipos de informações, como temperatura, pressão, luz, som, movimento, umidade, entre outros. Essas informações são transformadas em sinais elétricos ou digitais que podem ser interpretados por sistemas eletrônicos, como computadores e controladores.
                    A aplicação dos sensores é ampla e essencial em diversas áreas. Eles estão presentes em dispositivos eletrônicos, sistemas de automação, equipamentos médicos, veículos, agricultura, e até em soluções de energia renovável.
                    </p>
                    <img 
                        src={sensor1} 
                        alt="Sensor" 
                        className="w-full sm:w-1/3 max-w-[300px] h-auto object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Sensores do senai */}
            <section className="w-[90%] mx-auto mt-12">
                <h1 className="text-white text-2xl font-bold mb-6 relative">
                    <span className="pl-3 relative">Sensores no Senai</span>
                    <span className="absolute left-0 bottom-0 w-[4px] h-full bg-white"></span>
                </h1>
                <div className="bg-[#333333] p-6 flex flex-col sm:flex-row items-center sm:items-start rounded-lg shadow-lg">
                    <img 
                        src={senai} 
                        alt="Sensor" 
                        className="w-full sm:w-1/3 max-w-[300px] h-auto object-cover rounded-lg mb-4 sm:mb-0"
                    />
                    <p className="text-white sm:ml-6 sm:w-3/3 text-sm sm:text-base leading-relaxed">
                    No SENAI, sensores serão integrados ao ensino para preparar os alunos para as tecnologias da indústria 4.0. Eles serão usados em laboratórios simulando ambientes reais, permitindo o monitoramento de variáveis, automação de processos e segurança industrial, além de aplicações em agricultura e energia renovável. Essa abordagem formará profissionais qualificados que reduzirão custos de treinamento, implementarão soluções inovadoras e otimizarão processos nas empresas. Além disso, sensores ajudarão na adoção de práticas sustentáveis e no aumento da segurança e eficiência operacional, conectando educação e mercado de trabalho de forma estratégica.
                    </p>
                </div>
            </section>

            {/* Grafico de sensores */}
            <section className="w-[90%] mx-auto mt-16">
                <h2 className="text-white text-xl font-bold text-center mb-8">Distribuição de Sensores</h2>
                <div className="flex justify-center">
                    <Grafico className="w-full max-w-[500px] h-[400px] mb-10" />
                </div>
            </section>
        </div>
    );
};

export default Home;
