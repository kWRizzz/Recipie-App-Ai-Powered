import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/authentications/authSice.js";

function Register({ closeModal, openLogin }) {

    const dispatch = useDispatch()

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
    // console.log(name);
    

    return (
        <div
            onClick={closeModal}
            className=' fixed inset-0 bg-black/40  backdrop-blur-md z-50 w-full bg-slate-100 flex justify-center items-center'
        >

            {/* table */}

            <div
                onClick={(e) => e.stopPropagation()}
                className='h-[32rem] w-[32rem] bg-gray-200  border border-1 border-gray-300 rounded-lg shadow-2xl p-5'
            >

                <div className=' border border-black w-full h-20 p-5 flex justify-center items-center'>
                    <h1 className='text-center text-5xl text-gray-950 font-serif font-semibold'>
                        SignUP
                    </h1>
                </div>
                <div className='border border-black w-full h-96 p-5 flex flex-col justify-center items-center '>

                    <div className='border  w-full '>
                        <form onSubmit={handleSubmit}>

                            {/* userName */}

                            <div className='relative transition-transform ease-in-out duration-500 hover:scale-105 '>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        UserName
                                    </h6>
                                </div>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='UserName'
                                    type="text" />
                            </div>


                            {/* userEmail */}

                            <div className='relative mt-10 transition-transform ease-in-out delay-75 duration-500 hover:scale-105 '>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        Email
                                    </h6>
                                </div>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='Email'
                                    type="email" />
                            </div>


                            {/* userPassword */}

                            <div className='relative mt-10 transition-transform ease-in-out delay-75 duration-500 hover:scale-105'>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        Password
                                    </h6>
                                </div>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='Password'
                                    type="password" />
                            </div>

                            <div
                                className='flex justify-self-center items-center mt-10 transition-transform ease-in-out duration-200 hover:scale-105'

                            >
                                <input
                                    onClick={handleSubmit}
                                    className='border w-[5.25rem] h-[2rem] rounded-lg shadow-2xl bg-black text-white '
                                    type="submit"
                                    name=""
                                    id="" />
                            </div>

                        </form>
                    </div>

                    <div>
                        <h1>
                            If Already An Account
                            <button
                                onClick={openLogin}
                                className="text-blue-500"
                            >
                                Login
                            </button>
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register
