import React from 'react'
import TopBar from '../components/TopBar'

let data = [
  {'name' : 'Demi Finales', 'icon' : '', 'date' : 'Faites vos games avant le 18 décembre'},
]

function Calendrier() {
  return (
    <div id='Calendrier' className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center'>
        <TopBar title='Calendrier'/>
        <div className='h-full w-full flex-grow flex flex-col 2xl:flex-row justify-center items-center text-center gap-8 p-10'>
          {
            data.map((item) => (
              <div className='gap-8 bg-card flex flex-row 2xl:flex-col flex-1 w-full 2xl:h-full rounded-xl items-center justify-center'>
                <h1 className='text-hl font-bold text-3xl 2xl:text-5xl'>{item.name}</h1>
                <h1 className='text-white text-2xl 2xl:text-4xl'>{item.date}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Calendrier