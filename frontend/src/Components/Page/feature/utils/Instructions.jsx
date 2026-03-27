import React, { useState } from 'react'

const Instructions = () => {

  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    setItems([...items, text])
    setText("")
    console.log(items);
  }

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }



  return (
<div>

      {/* Input */}
      <div className='mt-3'>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='bg-gray-800 text-white rounded-lg border border-gray-700 w-full px-3 h-[3rem] focus:ring-2 focus:ring-blue-500 outline-none'
          type="text"
          placeholder='Enter ingredient'
        />
      </div>

      {/* Button */}
      <div className='mt-3'>
        <button
          onClick={() => handleSubmit()}
          className='px-4 py-1 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition'
        >
          Add
        </button>
      </div>

      {/* List */}
      <ul className='mt-4 space-y-2'>
        {
          items.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">

              <span>{item}</span>

              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 px-2 py-1 rounded text-sm hover:scale-105 transition"
              >
                Delete
              </button>

            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Instructions