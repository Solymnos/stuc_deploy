import React from 'react'
import TopBar from '../components/TopBar'

function Calendrier() {
  return (
    <div id='Calendrier' className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center'>
        <TopBar title='Calendrier'/>
        <div className='h-full flex-grow flex flex-col justify-center items-center text-center gap-5'>
          <p className='text-white font-bold 2xl:text-8xl text-5xl'>Début de compétition le <span className='text-hl'>17 Novembre.</span></p>
          <p className='text-white font-semibold 2xl:text-4xl text-xl underline'><a href='https://docs.google.com/forms/d/e/1FAIpQLSfAjI9i1_V8E8tzcz8rDPZvEhgPTjkrFC8qV7cdWoC6P-xCXQ/viewform'>Allez voter pour le choix du calendrier</a></p>
        </div>
      </div>
    </div>
  )
}

export default Calendrier