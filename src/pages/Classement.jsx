import React, { useState } from 'react'
import TopBar from '../components/TopBar'

let teams  = 
[
  { 'name' : 'NULARY', 'icon' : './img/logo/nulary.png', 'pts' : '15', 'pts_quizz' : '5', 'pts_ftn' : '10', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'LOST AUTISTOS 93', 'icon' : './img/logo/LA93.png', 'pts' : '15', 'pts_quizz' : '8', 'pts_ftn' : '7', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'POLARY', 'icon' : './img/logo/Polary.png', 'pts' : '11', 'pts_quizz' : '10', 'pts_ftn' : '1', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'CALECON FREEGUN', 'icon' : './img/logo/CF.png', 'pts' : '10', 'pts_quizz' : '8', 'pts_ftn' : '2', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'EXODIA', 'icon' : './img/logo/Exodia.png', 'pts' : '10', 'pts_quizz' : '2', 'pts_ftn' : '8', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'SLYP', 'icon' : './img/logo/SLYP.png', 'pts' : '10', 'pts_quizz' : '4', 'pts_ftn' : '6', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'GG CALL DOG', 'icon' : './img/logo/GGCDO.png', 'pts' : '9', 'pts_quizz' : '6', 'pts_ftn' : '3', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'GG CALL DRAKE', 'icon' : './img/logo/GGCDR.png', 'pts' : '8', 'pts_quizz' : '3', 'pts_ftn' : '5', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
  { 'name' : 'UNO', 'icon' : './img/logo/UNO.png', 'pts' : '5', 'pts_quizz' : '1', 'pts_ftn' : '4', 'pts_ssbu' : '?', 'pts_tft' : '?', 'pts_rl' : '?'},
]

function Classement() {

  let [selectType, setSelectType] = useState('PDP');

  return (
    <div id="Classement" className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center'>
        <TopBar title='Classement'/>
        <div className='flex flex-row'>
          <h1 className={`text-white font-bold my-3 mx-5 text-2xl decoration-hl cursor-pointer  ${selectType === 'PDP' ? 'underline' : 'no-underline'}`} onClick={() => setSelectType('PDP')}>Phase de poules</h1>
          <h1 className={`text-white font-bold my-3 mx-5 text-2xl decoration-hl cursor-pointer ${selectType === 'PF' ? 'underline' : 'no-underline'}`} onClick={() => setSelectType('PF')}>Phase Finale</h1>
        </div>
        <div className='h-full w-full flex-grow flex flex-col justify-center items-center text-center gap-5'>
        { selectType === 'PDP' ? (
        <>
          <div className='bg-card my-auto w-full flex flex-row flex-grow h-12 rounded-xl'>
            <div className='flex-7'>
            
            </div>
            <div className='flex-1 items-center justify-center text-center flex'>
              <h1 className='font-bold text-hl'>Total</h1>
            </div>
            <div className='flex-1 items-center justify-center text-center hidden 2xl:flex'>
              <img className='h-10' src='./img/logo/Quizz.png' alt='game logo'/>
            </div>
            <div className='flex-1 items-center justify-center text-center hidden 2xl:flex'>
              <img className='h-10' src='./img/logo/FT.png' alt='game logo'/>
            </div>
            <div className='flex-1 items-center justify-center text-center hidden 2xl:flex'>
              <img className='h-10' src='./img/logo/SSBU.png' alt='game logo'/>
            </div>
            <div className='flex-1 items-center justify-center text-center hidden 2xl:flex'>
              <img className='h-10' src='./img/logo/TFT.png' alt='game logo'/>
            </div>
            <div className='flex-1 items-center justify-center text-center hidden 2xl:flex'>
              <img className='h-10' src='./img/logo/RL.png' alt='game logo'/>
            </div>
          </div>
          <div className='flex flex-grow flex-col text-white w-full h-full gap-2'>
            {
              teams.map((team, index) => (
                <div className='bg-card my-auto w-full flex flex-row flex-grow rounded-xl items-center'>
                  <div className='flex-1 '>
                    <h1 className='text-white font-bold'>{index + 1}</h1>
                  </div>
                  <div className='flex-2'>
                    {
                      index !== teams.length - 1 ? (
                        <h1 className='text-green'>Qualifié</h1>
                      ) : (
                        <h1 className='text-red'>Eliminé</h1>
                      )
                    }
                  </div> 
                  <div className='flex-1 flex justify-center'>
                    <img className='max-h-10' src={team.icon} alt='icon of the team'/>
                  </div>
                  <div className='flex-3 flex justify-around items-center'>
                    <h1 className='font-bold'>{team.name}</h1>
                  </div>
                  <div className='flex-1'>
                    <h1 className='font-bold'>{team.pts}</h1>
                  </div>
                  <div className='hidden 2xl:flex flex-1 justify-center'>
                    <h1 className='font-bold'>{team.pts_quizz}</h1>
                  </div>
                  <div className='hidden 2xl:flex flex-1 justify-center'>
                    <h1 className='font-bold'>{team.pts_ftn}</h1>
                  </div>
                  <div className='hidden 2xl:flex flex-1 justify-center'>
                    <h1 className='font-bold'>{team.pts_ssbu}</h1>
                  </div>
                  <div className='hidden 2xl:flex flex-1 justify-center'>
                    <h1 className='font-bold'>{team.pts_tft}</h1>
                  </div>
                  <div className='hidden 2xl:flex flex-1 justify-center'>
                    <h1 className='font-bold'>{team.pts_rl}</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </>
          ) : (
          <p className='text-white font-bold 2xl:text-8xl text-5xl'>Les phases finales n'ont pas encore commencé !</p>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Classement
