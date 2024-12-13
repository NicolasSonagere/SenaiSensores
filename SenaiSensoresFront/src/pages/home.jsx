import React from 'react';
import Navbar from "../components/navbar";
import Grafico from "../components/grafico";
import sensor1 from '../assets/sensor1.png';

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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit odio velit tempore minima ipsum quia at placeat omnis dolorem facere. 
                        Vero distinctio harum vel deleniti ex perferendis, odio laudantium excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid numquam iure 
                        minima modi unde qui odit dolor esse praesentium! Suscipit minima facere architecto molestiae ducimus modi nesciunt dolores iste.
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
                        src={sensor1} 
                        alt="Sensor" 
                        className="w-full sm:w-1/3 max-w-[300px] h-auto object-cover rounded-lg mb-4 sm:mb-0"
                    />
                    <p className="text-white sm:ml-6 sm:w-3/3 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit odio velit tempore minima ipsum quia at placeat omnis dolorem facere. 
                        Vero distinctio harum vel deleniti ex perferendis, odio laudantium excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid numquam iure 
                        minima modi unde qui odit dolor esse praesentium! Suscipit minima facere architecto molestiae ducimus modi nesciunt dolores iste.
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
