// import React from 'react'
// import { TbCircleNumber1Filled } from "react-icons/tb";
// import RecipieDetails from './utils/RecipieDetails';
import Instructions from './utils/Instructions';
// import Ingrediant from './utils/Ingrediant';

// const Feature = () => {
//   return (
//     <div
//       className=' w-full bg-slate-400 rounded-lg  '
//     >

//       {/* recipie info */}
//       <div
//         className=' w-2/3 px-5 mr-2'
//       >



//         {/* Recipie Detail */}
//         <div
//           className=' flex flex-col bg-white   px-5 rounded-lg '
//         >

//           {/* heading */}
//           <div
//             className=' items-center'
//           >
//             <div
//               className=' flex items-center'
//             >
//               <TbCircleNumber1Filled
//                 color='black'
//                 size={30}
//               />

//               <h1>
//                 Recipie Detail
//               </h1>
//             </div>
//           </div>


//           {/* detail */}
//           <div
//             className=' w-full'
//           >
//             <RecipieDetails />
//           </div>

//           {/* information */}


//         </div>


//         {/* recipie information */}

//         <div
//           className='flex flex-col bg-white  px-5 rounded-lg mt-5'
//         >

//           <div
//             className=' flex items-center'
//           >
//             <TbCircleNumber1Filled
//               color='black'
//               size={30}
//             />

//             <h1>
//               Ingrediant
//             </h1>
//           </div>

//           {/* Ingrediant */}

//           <div>
//             <Ingrediant />
//           </div>

//         </div>

//       </div>

//       {/* recipie Phto ai Assistance */}

//       <div>

//       </div>
//     </div>
//   )
// }

// export default Feature















import React from 'react'
import { TbCircleNumber1Filled } from "react-icons/tb";
import RecipieDetails from './utils/RecipieDetails';
import Ingrediant from './utils/Ingrediant';

const Feature = () => {
  return (
    <div className='w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 rounded-lg text-white'>

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
      <div></div>

    </div>
  )
}

export default Feature