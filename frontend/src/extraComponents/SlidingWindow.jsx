// import React, { useEffect, useState } from 'react'
// import image1 from "../assets/sampleImages/img1.jpg";
// import image2 from "../assets/sampleImages/img2.jpg";
// import image3 from "../assets/sampleImages/img3.jpg";
// import image4 from "../assets/sampleImages/img4.jpg";
// import image5 from "../assets/sampleImages/img5.jpg";
// export const SlidingWindow = () => {

//     const images = [
//         image1,
//         image2,
//         image3,
//         image4,
//         image5
//     ]

//     const [current, setCurrent] = useState(0)

//     useEffect(() => {

//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % images.length)


//         }, 5000);

//         return () => clearInterval(interval)
//     }, [])


//     return (

//         <div
//             className=' group relative h-[10rem]  overflow-hidden rounded-3xl  w-full hover:shadow-inner  '
//         >
//             {/* background Image  */}
//             <div
//                 className=' relative w-full h-full'
//             >
//                 <div
//                     className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500'
//                 >

//                     {
//                         images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 className={` absolute w-full h-full object-cover  transition-transform duration-700 ${index === current ? "translate-x-0" : " translate-x-full"} group-hover:scale-105`}
//                             />
//                         ))
//                     }
//                 </div>
//             </div>

//             {/* text */}

//             <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white transition-all duration-500 group-hover:translate-x-2">

//                 <span className="bg-orange-500 px-3 py-1 rounded-full text-sm">
//                     WORKSPACE
//                 </span>

//                 <h1 className="text-4xl font-bold mt-3 transition-all duration-500 group-hover:scale-105">
//                     Create Your Masterpiece
//                 </h1>

//                 <p className="mt-2 text-sm opacity-90 group-hover:opacity-100 transition-all duration-500">
//                     Transform your culinary ideas into beautiful recipes.
//                 </p>

//             </div>
//         </div>
//     )
// }







import React, { useEffect, useState } from 'react'
import image1 from "../assets/sampleImages/img1.jpg";
import image2 from "../assets/sampleImages/img2.jpg";
import image3 from "../assets/sampleImages/img3.jpg";
import image4 from "../assets/sampleImages/img4.jpg";
import image5 from "../assets/sampleImages/img5.jpg";

export const SlidingWindow = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 5000);

        return () => clearInterval(interval)
    }, [])

    return (

        <div className='group relative h-[10rem] w-full overflow-hidden rounded-3xl shadow-lg border border-gray-800'>

            {/* Images */}
            <div className='relative w-full h-full'>
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 backdrop-blur-[2px]'>

                    {
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out 
                                ${index === current ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} 
                                group-hover:scale-110`}
                            />
                        ))
                    }

                </div>
            </div>

            {/* Content */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white transition-all duration-500 group-hover:translate-x-2">

                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    WORKSPACE
                </span>

                <h1 className="text-3xl font-bold mt-3 tracking-wide transition-all duration-500 group-hover:scale-105">
                    Create Your Masterpiece
                </h1>

                <p className="mt-2 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-all duration-500">
                    Transform your culinary ideas into beautiful recipes.
                </p>

            </div>
        </div>
    )
}