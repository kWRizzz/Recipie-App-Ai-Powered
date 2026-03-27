// import React from 'react'

// const RecipieDetails = () => {
//   return (
//     <div
//       className='w-full bg-slate-100 '
//     >

//       <div
//         className=' mt-3'
//       >
//         <h6
//           className=' text-sm'
//         >
//           Recipie title
//         </h6>

//         <div
//           className=' px-1'
//         >
//           <input
//             className=' bg-red-50 rounded-md border border-black w-full flex items-center px-2 h-[3rem] mt-2'
//             type="text"
//             placeholder='eg: Some Details '
//           />
//         </div>

//       </div>


//       <div
//         className=' mt-3'
//       >
//         <h6
//           className=' text-sm '
//         >
//           Recipie Description
//         </h6>

//         <div
//           className=' px-1'
//         >
//           <textarea
//             className=' bg-red-50 rounded-md border border-black w-full flex items-center px-2 h-[4.5rem] mt-2'
//             type="text"
//             placeholder='eg: Some Details '
//           />
//         </div>
//       </div>


//       <div
//         className='mt-3 flex items-center justify-center px-10'
//       >

//         <div>
//           <h1
//             className=' text-center font-semibold text-xs'
//           >
//             Prep Time
//           </h1>

//           <div
//             className=' flex justify-center items-center mt-1'
//           >
//             <input
//               className=' px-1 h-[4.5rem] text-center flex items-center rounded-lg w-2/5'
//               type="number"
//               placeholder='15min'
//             />
//           </div>
//         </div>

//         <div
//           className=''
//         >
//           <h1
//             className='text-center font-semibold text-xs'
//           >
//             Cooking Time
//           </h1>

//           <div
//             className=' flex justify-center items-center mt-1'
//           >
//             <input
//               className=' px-1 h-[4.5rem] text-center flex items-center rounded-lg w-2/5'
//               type="number"
//               placeholder='eg: 40min'
//             />
//           </div>
//         </div>

//         <div>
//           <h1
//             className='text-center font-semibold text-xs'
//           >
//             Serving
//           </h1>

//           <div
//             className='flex justify-center items-center mt-1'
//           >
//             <input
//               className='px-1 h-[4.5rem] text-center flex items-center rounded-lg w-2/5'
//               type="number"
//               placeholder='eg: 4'
//             />
//           </div>
//         </div>


//       </div>


//     </div>
//   )
// }

// export default RecipieDetails







import React from 'react'

const RecipieDetails = () => {
  return (
    <div className='w-full'>

      {/* Title */}
      <div className='mt-3'>
        <h6 className='text-sm text-gray-400'>Recipie title</h6>

        <input
          className='bg-gray-800 text-white rounded-lg border border-gray-700 w-full px-3 h-[3rem] mt-2 focus:ring-2 focus:ring-pink-500 outline-none'
          type="text"
          placeholder='eg: Some Details '
        />
      </div>

      {/* Description */}
      <div className='mt-4'>
        <h6 className='text-sm text-gray-400'>Recipie Description</h6>

        <textarea
          className='bg-gray-800 text-white rounded-lg border border-gray-700 w-full px-3 h-[4.5rem] mt-2 focus:ring-2 focus:ring-purple-500 outline-none'
          placeholder='eg: Some Details '
        />
      </div>

      {/* Time + Serving */}
      <div className='mt-5 flex items-center justify-between gap-4'>

        {/* Prep */}
        <div className='text-center w-full'>
          <h1 className='text-xs text-gray-400'>Prep Time</h1>
          <input
            className='mt-2 bg-gray-800 text-white rounded-lg border border-gray-700 w-full h-[3rem] text-center focus:ring-2 focus:ring-blue-500 outline-none'
            type="number"
            placeholder='15'
          />
        </div>

        {/* Cooking */}
        <div className='text-center w-full'>
          <h1 className='text-xs text-gray-400'>Cooking Time</h1>
          <input
            className='mt-2 bg-gray-800 text-white rounded-lg border border-gray-700 w-full h-[3rem] text-center focus:ring-2 focus:ring-pink-500 outline-none'
            type="number"
            placeholder='40'
          />
        </div>

        {/* Serving */}
        <div className='text-center w-full'>
          <h1 className='text-xs text-gray-400'>Serving</h1>
          <input
            className='mt-2 bg-gray-800 text-white rounded-lg border border-gray-700 w-full h-[3rem] text-center focus:ring-2 focus:ring-purple-500 outline-none'
            type="number"
            placeholder='4'
          />
        </div>

      </div>

    </div>
  )
}

export default RecipieDetails