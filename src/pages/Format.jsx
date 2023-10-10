import React from 'react'
import TopBar from '../components/TopBar'

let data = [
  { 'name' : 'Quizz',  'img' : './img/logo/Quizz_o.png'},
  { 'name' : '?',  'img' : './img/logo/Interrogation.png'},
  { 'name' : '?',  'img' : './img/logo/Interrogation.png'},
  { 'name' : '?',  'img' : './img/logo/Interrogation.png'},
  { 'name' : '?',  'img' : './img/logo/Interrogation.png'},
]

function Format() {
  return (
    <div id='Format' className='h-screen snap-center flex flex-col'>
      <div className='p-5 flex flex-col h-full justify-center items-center'>
        <TopBar title='Format'/>
        <div className='w-full flex-grow flex flex-row'>
          <div className='flex-1 w-full flex flex-grow justify-center items-center'>
            <div className='bg-card rounded-3xl w-3/4 h-3/4 flex flex-col'>
              <div className='w-full h-1/4 flex items-center text-center justify-center'>
                <h1 className='text-hl font-bold text-6xl'>Phase de poules</h1>
              </div>
              <div className='font-semibold w-full h-1/2 flex items-center text-center justify-center text-4xl p-12 text-white'>
                Tirage au sort de 4 jeux quelques jours avant le début de la compétition + Quizz
              </div>
              <div className='w-full h-1/4 flex flex-row justify-between px-5'>
                {
                  data.map(item => (
                    <div className='text-white text-2xl font-semibold text-center' key={item}>
                      <img className='h-1/2 border-white ml-4' src={item.img} alt='picked game icon'/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='flex-1 w-full flex flex-grow justify-center items-center'>
            <div className='bg-card rounded-3xl w-3/4 h-3/4 flex flex-col'>
              <div className='w-full h-1/4 flex items-center text-center justify-center'>
                <h1 className='text-hl font-bold text-6xl'>Play off</h1>
              </div>
              <div className='font font-semibold w-full h-1/2 flex flex-col items-center text-center justify-center text-4xl p-10 text-white gap-5'>
                <p>- Arbre à élimination directe.</p>
                <p>- Chaque équipe ban 1 jeu.</p>
                <p>- Chaque équipe pick 1 jeu.</p>
                <p>- LoL est forcément joué en 3ème.</p>
                <p>- Si besoin on pick les jeux restants.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Format