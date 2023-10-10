import React, { useState } from 'react'
import TopBar from '../components/TopBar';

let data = 
[
  { 'name' : 'LoL', 'icon' : './img/logo/LOL.png', 'img' : './img/Lol.gif', 'PDP' : 'Tournoi 2v2 avec 2 équipes de 2 joueurs par team' , 'PO' : 'BO1 en 5v5, game normale de LoL, le perdant du 2ème jeu choisit le side.'},
  { 'name' : 'RL', 'icon' : './img/logo/RL.png','img' : './img/RL.gif', 'PDP' : 'Rondes suisses BO3', 'PO' : 'BO5 en 3v3' },
  { 'name' : 'Valorant', 'icon' : './img/logo/VL.png','img' : './img/Valo.gif', 'PDP' : 'Rondes suisses, mode SWIFTPLAY', 'PO' : 'BO1 en 5v5'},
  { 'name' : 'TFT', 'icon' : './img/logo/TFT.png','img' : './img/TFT.gif', 'PDP' : '4 joueurs par équipes, format Hexleague', 'PO' : '1 game en 4v4' },
  { 'name' : 'Fortnite', 'icon' : './img/logo/FT.png','img' : './img/Fortnite.gif', 'PDP' : 'Format à determiner', 'PO' : 'Duel Custom en 3v3' },
  { 'name' : 'SSBU', 'icon' : './img/logo/SSBU.png','img' : './img/SSBU.gif', 'PDP' : 'Format Sus League, 2 joueurs minimum', 'PO' : '2 joueurs par équipe minimum, 2 x 1v1 en BO5, si besoin Decider en 2v2 en BO1' },
  { 'name' : 'TM', 'icon' : './img/logo/TM.png','img' : './img/TM.png', 'PDP' : 'Pas disponible en phase de poule', 'PO' : 'Format round en 3v3 sur les maps de la campagne'},
  { 'name' : 'Quizz', 'icon' : './img/logo/Quizz.png','img' : './img/Quizz.gif', 'PDP' : 'Questions de culture générale, LoL, Solary, Esport...', 'PO' : 'Pas disponible en phase de play off' },
]

function Jeux() {

  const [selectedId, setSelectedId] = useState(0);

  let handleGameClick = (id) =>
  {
    setSelectedId(id);
  }

  return (
    <div id='Jeux' className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center gap-5'>
        <TopBar title='Jeux'/>
        <div className='w-full flex flex-wrap gap-5'>
        {
          data.map((item, index) => (
            <div className={`${selectedId === index ? 'bg-card border text-white' : 'bg-card '} 2xl:flex-1 p-3 flex flex-row justify-center items-center  rounded-2xl gap-5 cursor-pointer`} key={item} onClick={() => handleGameClick(index)}>
              <img  className='h-12' src={item.icon} alt='game icon'/>
              <h1 className=' hidden 2xl:block 2xl:text-white 2xl:text-xl 2xl:font-bold'>{item.name}</h1>
            </div>
          ))
        }
        </div>
        <div className='w-full flex flex-grow flex-col 2xl:flex-row'>
          <div className='flex-1 justify-center items-center hidden 2xl:flex'>
            <img className='w-1/2' src={data[selectedId].img} alt='game img'/>
          </div>
          <div className='flex-1 flex justify-center items-center flex-col gap-5'>
            <div className='flex-1 bg-card rounded-3xl flex flex-col text-left 2xl:w-3/4 w-5/6 p-4'>
              <h1 className='text-hl 2xl:text-4xl text-2xl font-bold'>Phase de poules :</h1>
              <p className='text-white text-xl font-semibold'>{data[selectedId].PDP}</p>
            </div>
            <div className='flex-1 bg-card rounded-3xl flex flex-col text-left 2xl:w-3/4 w-5/6 p-4'>
              <h1 className='text-hl 2xl:text-4xl text-2xl font-bold'>Play Off :</h1>
              <p className='text-white text-xl font-semibold'>{data[selectedId].PO}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jeux