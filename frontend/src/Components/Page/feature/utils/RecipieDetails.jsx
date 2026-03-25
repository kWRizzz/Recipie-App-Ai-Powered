import React from 'react'

const RecipieDetails = () => {
  return (
    <div
      className='w-full bg-slate-100 '
    >

      <div
        className=' mt-3'
      >
        <h6
          className=' text-sm'
        >
          Recipie title
        </h6>

        <div
          className=' px-1'
        >
          <input
            className=' bg-red-50 rounded-md border border-black w-full flex items-center px-2 h-[3rem] mt-2'
            type="text"
            placeholder='eg: Some Details '
          />
        </div>

      </div>


      <div
        className=' mt-3'
      >
        <h6
          className=' text-sm'
        >
          Recipie Description
        </h6>

        <div
          className=' px-1'
        >
          <textarea
            className=' bg-red-50 rounded-md border border-black w-full flex items-center px-2 h-[3rem] mt-2'
            type="text"
            placeholder='eg: Some Details '
          />
        </div>
      </div>


      <div
        className='mt-3 flex items-center justify-center'
      >

        <div>
          <h1>
            Prep Time
          </h1>

          <div>
            <input
              className=' px-1 w-2/3'
              type="number"
              placeholder='eg: 15min'
            />
          </div>
        </div>
        
        <div
          className=''
        >
          <h1>
            Cooking Time
          </h1>

          <div>
            <input
              className=' px-1 w-2/3'
              type="number"
              placeholder='eg: 40min'
            />
          </div>
        </div>

        <div>
          <h1>
            Serving
          </h1>

          <div>
            <input
              className=' px-1 w-2/3'
              type="number"
              placeholder='eg: 4'
            />
          </div>
        </div>
        

      </div>


    </div>
  )
}

export default RecipieDetails