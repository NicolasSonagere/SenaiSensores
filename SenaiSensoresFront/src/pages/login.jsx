import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarVazia from '../components/NavVazia';
import InputField from '../components/InputField';
import Button from '../components/botao';
import { signIn } from '../api/user'; // Importar o método signIn

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await signIn(username, password);
            // Supondo que response seja algo do tipo { token: '...' }
            localStorage.setItem('token', response.token);
            alert('Login realizado com sucesso!');
            navigate('/'); // Redirecionar para a tela inicial ou a tela desejada
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Falha no login. Verifique suas credenciais.');
        }
    };

    return (
        <>
            <NavbarVazia />
            <div className="flex justify-center min-h-screen bg-[#242424] p-4">
                <div className="w-full max-w-md bg-[#333333] rounded-lg p-6 sm:p-8 mt-[5%] h-[50%]">
                    <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative">
                        <span className="pl-3 relative">Login</span>
                        <span className="absolute left-0 bottom-0 w-[4px] h-full bg-white"></span>
                    </h1>
                    <div className="space-y-4">
                        <InputField 
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputField 
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                        <Button 
                            label="Cadastrar" 
                            className="w-full sm:w-auto text-white border-white border hover:bg-black hover:text-white" 
                            to={"/cadastro"}
                            onClick={() => {}}
                        />
                        <Button 
                            label="Entrar" 
                            className="w-full sm:w-auto border-white border bg-white text-black hover:bg-black hover:text-white"
                            onClick={handleLogin} 
                        />
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Login;
