import React, { useState } from 'react'
import { FiUploadCloud } from "react-icons/fi";
import './cover.css'

const RecipieCover = () => {

  const [image, setImage] = useState()
  const [isExist, setIsExist] = useState(null)

  const handleImageSubmit = (e) => {
    e.preventDefault()
    setIsExist(() => !isExist)
  }

  return (
    <div className='w-full h-[14rem] border-2 border-dashed border-gray-700 rounded-2xl bg-gray-900 flex items-center justify-center relative overflow-hidden group'>

      {/* Hover Glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition'></div>

      <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer z-10'>

        {
          image ? (
            <img
              className='h-full w-full object-cover rounded-2xl'
              src={URL.createObjectURL(image)}
              alt=""
            />
          ) : (
            <>
              <FiUploadCloud size={40} className='text-gray-400 mb-2 group-hover:text-pink-400 transition' />

              <span className='text-sm text-gray-400 group-hover:text-gray-200'>
                Upload dish photo
              </span>

              <span className='text-xs text-gray-500 mt-1'>
                JPG, PNG up to 5MB
              </span>
            </>
          )
        }

        <input
          type="file"
          className='hidden'
          onChange={(e) => {
            setImage(e.target.files[0])
          }}
        />

      </label>

    </div>
  )
}

export default RecipieCover