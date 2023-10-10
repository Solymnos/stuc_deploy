import React from 'react'
import TopBar from '../components/TopBar'

function Calendrier() {
  return (
    <div id='Calendrier' className='h-screen snap-center flex flex-row'>
      <div className='p-5 flex flex-col w-full h-full justify-center items-center'>
        <TopBar title='Calendrier'/>
        <div className='w-full flex-grow flex flex-col justify-center items-center text-center'>
          <p className='text-white font-bold text-[110px]'>Début de compétition le <span className='text-[#EDB64A]'>17 Novembre.</span></p>
          <p className='text-white font-semibold text-4xl'>Le reste du calendrier sera annoncé plus tard.</p>
        </div>
      </div>
    </div>
  )
}

export default Calendrier