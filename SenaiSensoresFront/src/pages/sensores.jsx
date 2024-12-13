import React, { useState } from "react";
import Navbar from "../components/navbar";
import TabelaSensores from "../components/tabelaSensor";
import TabelaLuminosidade from "../components/tabelaLuminosidade";
import TabelaContador from "../components/tabelaContador";
import TabelaUmidade from "../components/tabelaUmidade";
import TabelaTemperatura from "../components/tabelaTemperatura";

function Sensor() {
  const [selectedTopic, setSelectedTopic] = useState("Sensores");

  // Conteúdo de cada seção
  const content = {
    Sensores: <TabelaSensores/>, 
    Luminosidade: <TabelaLuminosidade/>,
    Contador: <TabelaContador/>,
    Umidade: <TabelaUmidade/>,
    Temperatura: <TabelaTemperatura/>,
  };

  return (
    <>
        <Navbar/>
        <div className="flex min-h-screen">
            <div className="w-[15%] bg-[#2d2d2d] text-white p-[20px]">
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {Object.keys(content).map((topic) => (
                    <li
                        key={topic}
                        className={`m-[10px_0px] cursor-pointer relative p-2 ${
                        selectedTopic === topic
                            ? "pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] before:bg-white after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-r after:from-[rgba(255,255,255,0.2)] after:to-transparent"
                            : ""
                        } hover:border hover:border-white`}
                        onClick={() => setSelectedTopic(topic)}
                    >
                        {topic}
                    </li>
                    ))}
                </ul>
            </div>


            <div style={{ flex: 1, backgroundColor: "#1e1e1e", color: "white", padding: "20px" }}>
                {content[selectedTopic]}
            </div>
        </div>
    </>
  );
}

export default Sensor;
