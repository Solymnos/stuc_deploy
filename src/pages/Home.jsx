import React from 'react';
import { navigateClick } from '../utils/Navigation';

const data = [
  "Format", 
  "Calendrier",
  "Jeux", 
  "Equipes",
  "Résultats",
  "Classement"
]

function Home() {
  return (
    <div id='Home' className=' h-screen snap-center flex 2xl:flex-row flex-col 2xl:ml-16'>
      <div className='flex-col flex 2xl:flex-2 flex-3 text-center 2xl:text-left justify-center gap-5 p-5'>
        <h1 className='text-white font-bold 2xl:text-8xl text-7xl'>S.T.U.C</h1>
        <h2 className='text-hl font-semibold 2xl:text-4xl text-2xl'>Solary Tournament Ultra Challenge</h2>
        <ul className='list-none flex flex-col 2xl:gap-3'>
          {
            data.map(item =>
              (
                <li className='text-3xl 2xl:text-6xl font-semibold cursor-pointer text-white hover:underline decoration-hl' text={item} key={item} onClick={() => navigateClick(item)}>{item}</li>
              ))
          }
        </ul>
      </div>
      <div className='flex flex-col justify-center flex-2 2xl:flex-3 items-center'>
        <img className='w-1/2  2xl:w-3/4 animate-tiltshaking' src='/img/logo/Shark.png' alt='Wash machine'/>
      </div>
    </div>
  )
}

export default Home