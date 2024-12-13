import React, { useEffect, useState } from 'react';
import { getContador } from '../api/sensor'; // Ajustar o caminho conforme sua estrutura

const TabelaContador = () => {
    const [contadorData, setContadorData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContador();
                setContadorData(data);
            } catch (error) {
                console.error("Erro ao buscar dados de contador:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-[#333333] w-[90%] mx-auto p-6 rounded-lg shadow-lg overflow-x-auto">
            <h2 className="text-white text-xl font-bold mb-4">Contador</h2>
            <table className="w-full text-white text-sm">
                <thead>
                    <tr className="bg-[#444444]">
                        <th className="py-2 px-4 text-left">Sensor ID</th>
                        <th className="py-2 px-4 text-left">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {contadorData.map((item, index) => (
                        <tr key={index} className="odd:bg-[#3a3a3a] even:bg-[#2d2d2d]">
                            <td className="py-2 px-4">{item.sensor}</td>
                            <td className="py-2 px-4">{item.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaContador;
