
import Instructions from './utils/Instructions'
import React from 'react'
import { TbCircleNumber1Filled } from "react-icons/tb";
import RecipieDetails from './utils/RecipieDetails';
import Ingrediant from './utils/Ingrediant';
import RecipieCover from './utils/RecipieCover';

const Feature = () => {
  return (
    <div className='w-full flex bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 rounded-lg text-white'>

      {/* recipie info */}
      <div className='w-2/3 px-5 mr-2'>

        {/* Recipie Detail */}
        <div className='flex flex-col bg-gray-900 border border-gray-700 px-5 py-4 rounded-2xl shadow-lg'>

          {/* heading */}
          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-pink-400' />
            <h1 className='text-lg font-semibold'>Recipie Detail</h1>
          </div>

          {/* detail */}
          <div className='w-full'>
            <RecipieDetails />
          </div>
        </div>

        {/* ingrediant */}
        <div className='flex flex-col bg-gray-900 border border-gray-700 px-5 py-4 rounded-2xl mt-5 shadow-lg'>

          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-blue-400' />
            <h1 className='text-lg font-semibold'>Ingrediant</h1>
          </div>

          <div>
            <Ingrediant />
          </div>

        </div>

        {/* Instruction */}

        <div className='flex flex-col bg-gray-900 border border-gray-700 px-5 py-4 rounded-2xl mt-5 shadow-lg'>

          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-blue-400' />
            <h1 className='text-lg font-semibold'>Instruction</h1>
          </div>

          <div>
            <Instructions />
          </div>

        </div>

      </div>

      {/* right side (future use) */}
      <div
        className=' w-1/3'
      >

        {/* RecipieCover */}

        <div
          className=' px-5 py-4 flex flex-col rounded-2xl shadow-lg border w-full border-gray-700'
        >
          {/* heading */}
          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-pink-400' />
            <h1 className='text-lg font-semibold'>Recipie Detail</h1>
          </div>
          {/* image */}
          <div

          >
              <RecipieCover/>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Feature