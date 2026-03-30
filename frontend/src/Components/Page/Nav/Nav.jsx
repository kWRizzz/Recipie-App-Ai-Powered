import React from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../../Auth/Register'
import { useState } from 'react'
import Login from '../../Auth/Login'

function Nav() {

    const navigate = useNavigate()
    const [modal, setModal] = useState(null)

    return (
        <div className='w-full h-16 flex justify-between items-center px-20 bg-gray-950 text-white shadow-lg border-b border-gray-800 sticky top-0 z-50 '>
            
            {/* title */}
            <div
                onClick={() => navigate('./')}
                className='hover:cursor-pointer'
            >
                <h1 className='text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                    R-M
                </h1>
            </div>

            {/* rest details */}
            <div className='flex gap-6 items-center h-full'>

                <div className='px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer'>
                    <h1 className='text-lg font-semibold'>
                        Recipie Generator
                    </h1>
                </div>

                <div
                    onClick={() => navigate('./')}
                    className='px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer'
                >
                    <h1 className='text-lg font-semibold'>
                        Home
                    </h1>
                </div>

                <div
                    onClick={() => navigate('./Recipie')}
                    className= ' px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer'
                >
                    <h1 className='text-lg font-semibold'>
                        Check Your Recipies
                    </h1>
                </div>

            </div>

            {/* user */}
            <div
                onClick={() => setModal("Login")}
                className='px-4 py-1 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 font-medium hover:scale-105 transition-all duration-300 cursor-pointer'
            >
                <h1>
                    SignIn
                </h1>
            </div>

            {
                modal === "Register" &&
                (
                    <Register
                        closeModal={() => setModal(null)}
                        openLogin={() => setModal("Login")}
                    />
                )
            }

            {
                modal === "Login" &&
                (
                    <Login
                        closeModal={() => setModal(null)}
                        openRegister={() => setModal("Register")}
                    />
                )
            }

        </div>
    )
}

export default Nav