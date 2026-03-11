import React from 'react'
import { Link,useNavigate} from "react-router-dom"

function Register() {

    const navigate=useNavigate()

    return (
        <div className=' h-screen w-full bg-slate-100 flex justify-center items-center'>

            {/* table */}

            <div className='h-[32rem] w-[32rem] bg-gray-200  border border-1 border-gray-300 rounded-lg shadow-2xl p-5'>

                <div className=' border border-black w-full h-20 p-5 flex justify-center items-center'>
                    <h1 className='text-center text-5xl text-gray-950 font-serif font-semibold'>
                        SignUP
                    </h1>
                </div>
                <div className='border border-black w-full h-96 p-5 flex flex-col justify-center items-center '>

                    <div className='border  w-full '>
                        <form action="">


                            <div className='relative transition-transform ease-in-out duration-500 hover:scale-105 '>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        UserName
                                    </h6>
                                </div>
                                <input
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='UserName'
                                    type="text" />
                            </div>


                            <div className='relative mt-10 transition-transform ease-in-out delay-75 duration-500 hover:scale-105 '>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        Email
                                    </h6>
                                </div>
                                <input
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='Email'
                                    type="email" />
                            </div>


                            <div className='relative mt-10 transition-transform ease-in-out delay-75 duration-500 hover:scale-105'>
                                <div className='px-2'>
                                    <h6 className=' absolute -top-3 bg-gray-200 w-fit border rounded-lg '>
                                        Password
                                    </h6>
                                </div>
                                <input
                                    className=' w-full border-2 border-black rounded-md h-12 text-center bg-gray-200 placeholder:bg-gray-200 '
                                    placeholder='Password'
                                    type="password" />
                            </div>

                            <div className='flex justify-self-center items-center mt-10 transition-transform ease-in-out duration-200 hover:scale-105'>
                                <input className='border w-[5.25rem] h-[2rem] rounded-lg shadow-2xl bg-black text-white '
                                 type="submit"
                                 name=""
                                 id="" />
                            </div>

                        </form>
                    </div>
                    
                    <div>
                        <h1>
                            If Already An Account <div
                                onClick={()=>navigate('./LogIn')}
                            >
                                Login
                            </div>
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register
