import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    //   const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password, confirmPassword);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-transparent w-[35rem] sm:w-[30rem] rounded-xl shadow-lg p-6">
                <form className="mx-auto space-y-4" onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-lg font-medium text-gray-100 mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-base bg-transparent"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-100 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-base bg-transparent placeholder-gray-300"
                            placeholder="email@gmail.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-lg font-medium text-gray-100 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-base bg-transparent"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-lg font-medium text-gray-100 mb-2"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-base bg-transparent"
                            onChange={(e) => {
                                setconfirmPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div></div>
                    <button
                        type="submit"
                        className="w-full text-lg bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md py-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default SignUpForm;
