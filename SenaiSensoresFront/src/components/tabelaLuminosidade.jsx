import React, { useEffect, useState } from 'react';
import { getLuminosidade } from '../api/sensor'; // Importando do mesmo arquivo

const TabelaLuminosidade = () => {
    const [luminosidadeData, setLuminosidadeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLuminosidade();
                setLuminosidadeData(data);
            } catch (error) {
                console.error("Erro ao buscar dados de luminosidade:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-[#333333] w-[90%] mx-auto p-6 rounded-lg shadow-lg overflow-x-auto">
            <h2 className="text-white text-xl font-bold mb-4">Luminosidade</h2>
            <table className="w-full text-white text-sm">
                <thead>
                    <tr className="bg-[#444444]">
                        <th className="py-2 px-4 text-left">Valor</th>
                        <th className="py-2 px-4 text-left">Sensor ID</th>
                        <th className="py-2 px-4 text-left">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {luminosidadeData.map((item, index) => (
                        <tr key={index} className="odd:bg-[#3a3a3a] even:bg-[#2d2d2d]">
                            <td className="py-2 px-4">{item.valor}</td>
                            <td className="py-2 px-4">{item.sensor}</td>
                            <td className="py-2 px-4">{item.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaLuminosidade;
