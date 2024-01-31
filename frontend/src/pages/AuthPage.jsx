import React, { useState } from 'react'
import homePage_background from '../images/home_background.png'
import Navbar from '../components/Navbar/Navbar';
import LoginForm from '../components/AuthPage/LoginForm';
import SignUpForm from '../components/AuthPage/SignUpForm';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className="h-screen w-full"
            style={{ backgroundImage: `url(${homePage_background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-row w-full'>
                <div className=" flex flex-row gap-20 p-10 justify-center w-full">
                    <div
                        className={`Login text-2xl text-white font-bold hover:cursor-pointer ${!isLogin ? "underline-offset-2 underline" : ""
                            }`}
                        onClick={() => {
                            setIsLogin(false);
                        }}>
                        Sign up
                    </div>
                    <div
                        className={`Login text-2xl text-white font-bold hover:cursor-pointer ${isLogin ? "underline-offset-2 underline" : ""
                            }`}
                        onClick={() => {
                            setIsLogin(true);
                        }}
                    >
                        Log in
                    </div>
                </div>
            </div>
            <div>
                {isLogin ? <LoginForm /> : <SignUpForm />}
                {/* <LoginForm/> */}
            </div>
        </div>
    )
}

export default AuthPage