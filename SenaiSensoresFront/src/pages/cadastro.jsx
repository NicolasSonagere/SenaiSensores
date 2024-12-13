import React from 'react';
import NavbarVazia from '../components/NavVazia';
import InputField from '../components/InputField';
import Button from '../components/botao';
import { createUser } from '../api/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const salvarCadastro = async() => {
        await createUser(email, username, password)

        await alert('Usuario cadastrado com sucesso')
        navigate("/login")
    }
    return (
        <>
            <NavbarVazia />
            <div className="flex justify-center min-h-screen bg-[#242424] p-4">
                <div className="w-full max-w-md bg-[#333333] rounded-lg p-6 sm:p-8 mt-[5%] h-[50%]">
                    <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative">
                        <span className="pl-3 relative">Cadastro</span>
                        <span className="absolute left-0 bottom-0 w-[4px] h-full bg-white"></span>
                    </h1>
                    <div className="space-y-4">
                        <InputField 
                            value={username}
                            label="Usuario"
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        <InputField
                            value={email}
                            label="Email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            />
                        <InputField
                            value={password}
                            label="Password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                        <Button
                            label="Cancelar"
                            className="w-full sm:w-auto text-white border-white border hover:bg-black hover:text-white"
                            to={"/login"}
                        />
                        <Button
                            label="Salvar"
                            className="w-full sm:w-auto border-white border bg-white text-black hover:bg-black hover:text-white"
                            onClick={salvarCadastro}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cadastro;