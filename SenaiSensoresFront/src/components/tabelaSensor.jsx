import React, { useEffect, useState } from 'react';
import { getSensores } from '../api/sensor'; // Ajuste o caminho conforme a sua estrutura de pastas

const TabelaSensores = () => {
    const [sensores, setSensores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSensores();
                setSensores(data);
            } catch (error) {
                console.error("Erro ao buscar sensores:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-[#333333] w-[90%] mx-auto p-6 rounded-lg shadow-lg overflow-x-auto">
            <h2 className="text-white text-xl font-bold mb-4">Sensores</h2>
            <table className="w-full text-white text-sm">
                <thead>
                    <tr className="bg-[#444444]">
                        <th className="py-2 px-4 text-left">Tipo</th>
                        <th className="py-2 px-4 text-left">Unidade de Medida</th>
                        <th className="py-2 px-4 text-left">Latitude</th>
                        <th className="py-2 px-4 text-left">Longitude</th>
                        <th className="py-2 px-4 text-left">Localização</th>
                        <th className="py-2 px-4 text-left">Responsável</th>
                        <th className="py-2 px-4 text-left">Status Operacional</th>
                        <th className="py-2 px-4 text-left">Observação</th>
                        <th className="py-2 px-4 text-left">MAC Address</th>
                    </tr>
                </thead>
                <tbody>
                    {sensores.map((sensor, index) => (
                        <tr key={index} className="odd:bg-[#3a3a3a] even:bg-[#2d2d2d]">
                            <td className="py-2 px-4">{sensor.tipo}</td>
                            <td className="py-2 px-4">{sensor.unidade_medida}</td>
                            <td className="py-2 px-4">{sensor.latitude}</td>
                            <td className="py-2 px-4">{sensor.longitude}</td>
                            <td className="py-2 px-4">{sensor.localizacao}</td>
                            <td className="py-2 px-4">{sensor.responsavel}</td>
                            <td
                                className={`py-2 px-4 ${
                                    sensor.status_operacional === true
                                        ? "text-green-500 font-bold"
                                        : "text-red-500 font-bold"
                                }`}
                            >
                                {sensor.status_operacional === true ? "True" : "False"}
                            </td>
                            <td className="py-2 px-4">{sensor.observacao}</td>
                            <td className="py-2 px-4">{sensor.mac_address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaSensores;
