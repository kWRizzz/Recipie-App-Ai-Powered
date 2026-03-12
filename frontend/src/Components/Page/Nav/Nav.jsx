import React from 'react'
import { useNavigation, useNavigate } from 'react-router-dom'
import Register from '../../Auth/Register'
import { useState } from 'react'
import Login from '../../Auth/Login'
function Nav() {

    const navigate = useNavigate()

    const [modal, setModal] = useState(null)
    return (
        <div className='w-full  border-4 border-black h-16  flex justify-between items-center px-32'>
            {/* title */}
            <div
                onClick={() => navigate('./')}
                className=' hover:cursor-pointer hover:underline'
            >
                <h1
                    className=' text-4xl font-bold'
                >
                    R-M
                </h1>
            </div>



            {/* rest details */}
            <div
                className='flex gap-5 justify-between items-center h-full '
            >

                <div className='flex justify-between items-center border border-black h-full p-1 transition-all ease-linear duration-300 delay-100  hover:bg-black hover:text-white  hover:cursor-pointer'>
                    <h1
                        className=' text-2xl font-semibold'
                    >Recipie Generator </h1>
                </div>


                <div
                    onClick={() => navigate('./')}
                    className='flex justify-between items-center border border-black h-full p-1 transition-all ease-linear duration-300 delay-100  hover:bg-black hover:text-white hover:cursor-pointer'
                >
                    <div>
                        <h1
                            className='text-2xl font-semibold'
                        >
                            Home
                        </h1>
                    </div>
                </div>

                <div
                    onClick={() => navigate('./Recipie')}
                    className='flex justify-between items-center border border-black h-full p-1 transition-all ease-linear duration-300 delay-100  hover:bg-black hover:text-white hover:cursor-pointer'
                >
                    <div>
                        <h1
                            className='text-2xl font-semibold'
                        >
                            Check Your Recipies
                        </h1>
                    </div>
                </div>

            </div>




            {/* user */}

            <div
                onClick={() => setModal("Login")}
                className=' cursor-pointer'
            >
                <h1>
                    SignIn
                </h1>
            </div>

            {
                modal=== "Register" 
                &&
                (
                    <Register
                        closeModal={()=>setModal(null)}
                        openLogin={()=>setModal("Login")}
                    />
                )
            }

            {
                modal=== "Login" 
                &&
                (
                    <Login
                        closeModal={()=>setModal(null)}
                        openRegister={()=>setModal("Register")}
                    />
                )
            }


        </div>
    )
}

export default Nav