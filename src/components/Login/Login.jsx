import React, { useState } from 'react';
import Dog from '../../assets/Images/image-login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://tu-backend.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login exitoso');
                window.location.href = '/Home';
            } else {
                alert(data.message || 'Error en el login');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
            alert('Ocurrió un error, por favor intenta de nuevo.');
        }
    };

    return (
        <div className="w-full h-screen bg-cGreen flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-cWhite rounded-tr-custom rounded-br-custom p-4 md:p-10">
                <h2 className="text-center text-cGreen text-4xl md:text-7xl font-MontserratBold">
                    Welcome back!
                </h2>
                <p className="text-cBlack text-lg md:text-3xl font-ConfortaaRegular text-center mt-4">
                    Please give us basic information. Thanks!
                </p>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='Example@gmail.com' 
                    value={email}
                    onChange={handleInputChange}
                    className="w-3/5 md:min-w-96 p-4 h-12 mt-8 rounded-lg border-2 border-cGreen text-cBlack text-base md:text-xl font-MontserratRegular" 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder='********' 
                    value={password}
                    onChange={handleInputChange}
                    className="w-3/5 md:min-w-96 p-4 h-12 mt-6 rounded-lg border-2 border-cGreen text-cBlack text-base md:text-xl font-MontserratRegular" 
                />
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-8 mt-10 w-72 md:w-auto'>
                    <button 
                        type="button" 
                        className="flex items-center justify-center w-full md:min-w-64 h-12 rounded-full border-2 border-cGreen text-cGreen text-base md:text-xl font-MontserratRegular p-4">
                        Sign up
                    </button>
                    <button 
                        type='button'
                        onClick={handleLogin} 
                        className="flex items-center justify-center w-full md:min-w-64 h-12 rounded-full border-2 border-cGreen bg-cGreen text-cWhite text-base md:text-xl font-MontserratRegular p-4">
                        Log in
                    </button>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="hidden md:flex justify-end items-end w-1/2 h-full">
                <img src={Dog} alt="Dog" className="max-w-xl h-auto" />
            </div>
        </div>
    );
}

export default Login;