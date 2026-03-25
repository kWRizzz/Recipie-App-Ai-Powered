import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authentications/authSice.js";

function Register({ closeModal, openLogin }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(registerUser({
            name,
            email,
            password
        }))
    }

    const userRegistered = useSelector((state) => state.auth.user)

    useEffect(() => {
        if (userRegistered) {
            closeModal()
            openLogin()
        }
    }, [userRegistered])

    return (
        <div
            onClick={closeModal}
            className='fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-center items-center'
        >

            {/* Modal Card */}
            <div
                onClick={(e) => e.stopPropagation()}
                className='w-[28rem] bg-gray-900 text-white rounded-2xl shadow-2xl p-6 border border-gray-700 animate-fadeIn'
            >

                {/* Heading */}
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-bold tracking-wide'>
                        Create Account 🚀
                    </h1>
                    <p className='text-gray-400 text-sm mt-1'>
                        Sign up to get started
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>

                    {/* Name */}
                    <div className='relative'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            required
                            className='peer w-full px-4 pt-5 pb-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        <label className='absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-purple-400 transition'>
                            Username
                        </label>
                    </div>

                    {/* Email */}
                    <div className='relative'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            className='peer w-full px-4 pt-5 pb-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
                        />
                        <label className='absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-pink-400 transition'>
                            Email
                        </label>
                    </div>

                    {/* Password */}
                    <div className='relative'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required
                            className='peer w-full px-4 pt-5 pb-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <label className='absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-blue-400 transition'>
                            Password
                        </label>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className='w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 font-semibold hover:scale-105 transition-transform duration-300'
                    >
                        Sign Up
                    </button>

                </form>

                {/* Footer */}
                <div className='text-center mt-5 text-sm text-gray-400'>
                    Already have an account?{" "}
                    <button
                        onClick={openLogin}
                        className="text-pink-400 hover:underline"
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Register