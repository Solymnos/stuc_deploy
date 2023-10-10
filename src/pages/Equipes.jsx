import React , { useState } from 'react'
import data from '../Teams.json';
import TopBar from '../components/TopBar';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Equipes() {

  const [ selectedId , setSelectedId ] = useState(0);

  let handleTeamClick = (id) =>
  {
    setSelectedId(id);
  }

  return (
    <div id='Equipes' className='h-screen snap-center flex flex-row'>
      <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center gap-5'>
        <TopBar title='Equipes' />
        <div className='flex flex-row w-full justify-center px-5 gap-5'>
          {
            data.teams.map((team, index) => 
            (
              <div className={`${selectedId === index ? 'bg-card border text-white' : 'bg-card '} flex flex-row justify-center items-center p-3 rounded-2xl gap-5 cursor-pointer`} key={team} onClick={() => handleTeamClick(index)}>
                <img className='h-12' src={team.icon} alt='team icon'/>
                <h1 className='text-white text-xl font-bold'>{team.name}</h1>
              </div>
            ))
          }
        </div>
        <div className='w-full h-full flex flex-row justify-center items-center text-center gap-8 mt-5'>
          <img className='cursor-pointer icon-arrow-long-left w-10 review-swiper-button-prev' src='./img/arrow.png' alt='arrow'/>
          <Swiper loop={true} modules={[Navigation]} className='h-full' spaceBetween={32} slidesPerView={3} navigation={{nextEl: '.review-swiper-button-next',prevEl: '.review-swiper-button-prev'}}>
            {
              data.teams[selectedId].players.map((player) => (
                <SwiperSlide className='h-full' key={player}>
                  <div className='bg-card h-full rounded-3xl flex flex-col p-5 gap-3'>
                    <h1 className='text-white text-4xl font-bold'>{player.name}</h1>
                    <h2 className='text-hl text-md'>@{player.discord}</h2>
                    <div className='w-full flex-grow flex flex-row'>
                      <div className='h-full flex-1 flex flex-col text-left'>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/LOL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>League of Legends</h1>
                            {
                              player.LLOL !== "" ? (
                                <h1 className='text-white text-md font-semibold'>{player.RLOL} - <a className='underline' href={player.LLOL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/TFT.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>TeamFight Tactics</h1>
                            {
                              player.LTFT !== "" ? (
                                <h1 className='text-white text-md font-semibold'>{player.RTFT} - <a className='underline' href={player.LTFT}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/VL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Valorant</h1>
                            {
                              player.LVAL !== "" ? (
                                <h1 className='text-white text-md font-semibold'>{player.RVAL} - <a className='underline' href={player.LVAL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/RL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Rocket League</h1>
                            {
                              player.LROL !== "" ? (
                                <h1 className='text-white text-md font-semibold'>{player.RROL} - <a className='underline' href={player.LROL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      <div className='h-full flex-1 flex flex-col text-left'>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/TM.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Trackmania</h1>
                            {
                              player.PTRM !== "" ? (
                                <h1 className='text-white text-md font-semibold'>Pseudo : {player.PTRM}</h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>  
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/FT.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Fortnite</h1>
                            {
                              player.PFTN !== "" ? (
                                <h1 className='text-white text-md font-semibold'>Pseudo : {player.PFTN}</h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>  
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/SSBU.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Super Smash Bros Ultimate</h1>
                            {
                              player.SSBU !== "" ? (
                                <h1 className='text-[#00FF00] text-md font-semibold'>✔</h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>  
                        </div>
                        <div className='w-full flex-1 flex flex-row items-center gap-2'>
                          <img className='w-11 h-11' src='./img/logo/Quizz.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center text-left'>
                            <h1 className='text-hl text-md font-bold'>Quizz</h1>
                            {
                              player.QUIZ !== "" ? (
                                <h1 className='text-[#00FF00] text-md font-semibold'>✔</h1>
                              ) : (
                                <h1 className='text-[#FF0000] text-md font-semibold'>✘</h1>
                              )
                            }
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <img className='cursor-pointer icon-arrow-long-right w-10 review-swiper-button-next -scale-x-100' src='./img/arrow.png' alt='arrow'/>
        </div>
      </div>
    </div>
    
  )
}

export default Equipes