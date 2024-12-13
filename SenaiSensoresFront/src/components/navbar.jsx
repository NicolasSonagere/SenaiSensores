import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./botao";
import { uploadCSV } from "../api/sensor"; // Importe a função de upload, ajuste o caminho conforme seu projeto

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSensorDropdown, setShowSensorDropdown] = useState(false);
  const [selectedTable, setSelectedTable] = useState("Sensor");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Ajustar caso queira validar token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const handleFileUpload = async () => {
    if (!selectedFile || !selectedTable) {
      console.log('Selecione um arquivo e uma tabela antes de enviar.');
      return;
    }

    try {
      const response = await uploadCSV(selectedTable, selectedFile);
      console.log('Resposta do servidor:', response);
      // Aqui você pode tratar o retorno, mostrar mensagem de sucesso, etc.
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      // Tratar erros, exibir mensagens de erro, etc.
    } finally {
      setShowModal(false);
    }
  };

  return (
    <nav className="bg-[#1a1a1a] p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white font-bold mr-[50px] text-xl`
          }
        >
          Senai Sensores
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mr-[20px] text-white ${
              isActive ? "underline decoration-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/sensores"
          className={({ isActive }) =>
            `text-white mr-[50px] ${
              isActive ? "underline decoration-white" : ""
            }`
          }
        >
          Sensores
        </NavLink>
      </div>
      {isAuthenticated ? (
        <div className="flex items-center">
          <button
            className="bg-white text-black px-4 py-2 rounded-md ml-4"
            onClick={() => setShowModal(true)}
          >
            Upload Sensores
          </button>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white shadow-lg rounded-md w-96 p-4">
                <h3 className="text-lg font-bold mb-2">Tipo de sensor</h3>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                  value={selectedTable}
                  onChange={(e) => setSelectedTable(e.target.value)}
                >
                  <option value="Sensor">Sensor</option>
                  <option value="Contador">Contador</option>
                  <option value="Luminosidade">Luminosidade</option>
                  <option value="Temperatura">Temperatura</option>
                  <option value="Umidade">Umidade</option>
                </select>
                <h3 className="text-lg font-bold mb-2">Upload de Dados</h3>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <div className="flex justify-end">
                  <button
                    className="bg-gray-200 text-black px-4 py-2 rounded-md mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleFileUpload}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
          <button onClick={handleLogout} className="text-white font-bold ml-4">
            Sair
          </button>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-white font-bold mr-2 ${
              isActive ? "underline decoration-white" : ""
            }`
          }
        >
          Entrar
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
