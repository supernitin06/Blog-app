import React, { useState } from 'react';
import authService from '../Appwriter/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../STORE/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FaUserPlus } from 'react-icons/fa'; // Ensure you have react-icons installed

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(login(currentUser));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
            style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}
        >
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200 max-w-md w-full">
                <div className="mb-6 flex justify-center">
                    <Logo width="100px" />
                </div>
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">Create Your Account</h2>
                <p className="text-center text-gray-600 mb-6">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="space-y-4">
                    <div>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div>
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email address must be a valid address",
                                },
                            })}
                        />
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        Create Account
                    </Button>
                </form>
                <div className="text-center mt-6">
                    <FaUserPlus className="mx-auto text-5xl text-gray-500" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
