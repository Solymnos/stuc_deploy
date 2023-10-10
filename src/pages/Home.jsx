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
    <div id='Home' className='h-screen snap-center flex flex-row'>
      <div className='flex-2 flex-col justify-center gap-5 flex p-5 ml-16'>
        <h1 className='text-white font-bold text-8xl'>S.T.U.C</h1>
        <h2 className='text-hl font-semibold text-4xl'>Solary Tournament Ultra Challenge</h2>
        <ul className='list-none flex flex-col gap-5'>
          {
            data.map(item =>
              (
                <li className='text-6xl font-semibold cursor-pointer text-white hover:underline decoration-hl' text={item} key={item} onClick={() => navigateClick(item)}>{item}</li>
              ))
          }
        </ul>
      </div>
      <div className='flex-3 flex items-center justify-center'>
        <img className='h-3/4 animate-tiltshaking' src='/img/logo/Shark.png' alt='Wash machine'/>
      </div>
    </div>
  )
}

export default Home