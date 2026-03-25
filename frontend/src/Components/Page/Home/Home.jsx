import React from 'react'
import Nav from '../Nav/Nav'
import { SlidingWindow } from '../../../extraComponents/SlidingWindow'
import Feature from '../feature/Feature'

function Home() {
  return (
    <div
      className=' w-full px-[10rem] pt-10'
    >
      <div
        
      >
        <SlidingWindow />
      </div>

      {/* Fetaure */}

      <div>

        <Feature/>
      </div>
    </div>
  )
}

export default Home