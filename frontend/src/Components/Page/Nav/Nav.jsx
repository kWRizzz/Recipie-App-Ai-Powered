import React from 'react'
import { useNavigation, useNavigate } from 'react-router-dom'

function Nav() {

    const navigate = useNavigate()
    return (
        <div className='w-full  border-4 border-black h-16  flex justify-between items-center px-64'>

            <div className='flex justify-between items-center border border-black h-full'>
                <h1
                    className=' text-2xl font-semibold'
                >Recipie Generator </h1>
            </div>


            <div
                onClick={() => navigate('./')}
                className='flex justify-between items-center border border-black h-full'
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
                className='flex justify-between items-center border border-black h-full'
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
    )
}

export default Nav