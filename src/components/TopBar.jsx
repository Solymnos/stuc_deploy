import React from 'react'
import { navigateClick } from '../utils/Navigation';

function TopBar({title}) {
  return (
    <div className='flex flex-row w-full justify-center items-center mb-5'>
        <img className='2xl:h-24 h-20 cursor-pointer' src='./img/logo/Shark.png' alt='STUC Logo' onClick={() => navigateClick('Home')}/>
        <h1 className='text-white font-bold 2xl:text-6xl text-4xl flex-grow text-center'>{title}</h1>
        <img className='2xl:h-24 h-20 cursor-pointer -scale-x-100' src='./img/logo/Shark.png' alt='STUC Logo' onClick={() => navigateClick('Home')}/>
    </div>
  )
}

export default TopBar