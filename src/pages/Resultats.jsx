import React from 'react'
import TopBar from '../components/TopBar'

function Resultats() {
  return (
    <div id="Résultats" className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center'>
        <TopBar title='Resultats'/>
        <div className='h-full flex-grow flex flex-col justify-center items-center text-center gap-5'>
          <p className='text-white font-bold 2xl:text-8xl text-5xl'>La compétition n'a pas encore commencée !</p>
        </div>
      </div>
    </div>
  )
}

export default Resultats