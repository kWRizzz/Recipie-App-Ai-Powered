
import Instructions from './utils/Instructions'
import React from 'react'
import { TbCircleNumber1Filled } from "react-icons/tb";
import RecipieDetails from './utils/RecipieDetails';
import Ingrediant from './utils/Ingrediant';
import RecipieCover from './utils/RecipieCover';

import { useDispatch, useSelector } from 'react-redux';
import { createRecipie } from "../../../redux/recipies/recipieSlice.js";
import { useState } from 'react';



const Feature = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const finalData={
      title,
      description,
      servings,
      prepTime,
      cookTime,
      ingrediants,
      instructions
    }

    console.log(` final daa ${finalData}`);
    
    dispatch(createRecipie(finalData))
  }

  const dispatch = useDispatch();
  const { recipie, loading } = useSelector((state) => state.recipie);
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [servings, setServings] = useState(null)
  const [prepTime, setPrepTime] = useState(null)
  const [cookTime, setCookTime] = useState(null)
  const [ingrediants, setIngrediants] = useState([])
  const [instructions, setInstructions] = useState([])

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
            <RecipieDetails title={title} description={description} servings={servings} prepTime={prepTime} cookTime={cookTime}   setTitle={setTitle} setDescription={ setDescription} setServings={setServings} setCookTime={setCookTime} setPrepTime={setPrepTime} />
          </div>
        </div>

        {/* ingrediant */}
        <div className='flex flex-col bg-gray-900 border border-gray-700 px-5 py-4 rounded-2xl mt-5 shadow-lg'>

          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-blue-400' />
            <h1 className='text-lg font-semibold'>Ingrediant</h1>
          </div>

          <div>
            <Ingrediant ingrediants={ingrediants} setIngrediants={setIngrediants} />
          </div>

        </div>

        {/* Instruction */}

        <div className='flex flex-col bg-gray-900 border border-gray-700 px-5 py-4 rounded-2xl mt-5 shadow-lg'>

          <div className='flex items-center gap-2 mb-3'>
            <TbCircleNumber1Filled size={28} className='text-blue-400' />
            <h1 className='text-lg font-semibold'>Instruction</h1>
          </div>

          <div>
            <Instructions instructions={instructions} setInstructions={setInstructions} />
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
            <RecipieCover />
          </div>
        </div>


      </div>

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Publish Recipe"}
      </button>
    </div>
  )
}

export default Feature