import React from 'react'
import { TbCircleNumber1Filled } from "react-icons/tb";
import RecipieDetails from './utils/RecipieDetails';
import Instructions from './utils/Instructions';

const Feature = () => {
  return (
    <div
      className=' w-full bg-slate-400 rounded-lg '
    >

      {/* recipie info */}
      <div
        className=' w-2/3 px-5 mr-2'
      >



        {/* Recipie Detail */}
        <div
          className=' flex flex-col bg-white items-center px-5 rounded-lg'
        >

          {/* heading */}
          <div
            className=' flex items-center'
          >
            <TbCircleNumber1Filled
              color='white'
            />

            <h1>
              Recipie Detail
            </h1>
          </div>


          {/* detail */}
          <div
            className=' w-full'
          >
            <RecipieDetails />
          </div>

          {/* information */}


        </div>


        {/* recipie information */}

        <div
          className='flex flex-col bg-white items-center px-5 rounded-lg'
        >

          <div
            className=' flex items-center'
          >
            <TbCircleNumber1Filled
              color='white'
            />

            <h1>
              Recipie Detail
            </h1>
          </div>

        </div>

      </div>

      {/* recipie Phto ai Assistance */}

      <div>

      </div>
    </div>
  )
}

export default Feature