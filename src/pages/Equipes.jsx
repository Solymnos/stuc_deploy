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
    <div id='Equipes' className='h-screen snap-center flex flex-col'>
      <div className='flex flex-col h-full p-5 justify-center items-center'>
        <TopBar title='Equipes'/>
        <div className='w-full flex flex-row justify-center items-center gap-8'>
          <img className='cursor-pointer w-10 icon-arrow-long-left review-team-button-prev' src='./img/arrow.png' alt='arrow'/>
          <Swiper className='flex-grow' loop={true} modules={[Navigation]} spaceBetween={32} slidesPerView={1} breakpoints={{
        640: {
          slidesPerView: 2, 
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 4,
        },
      }} navigation={{nextEl: '.review-team-button-next',prevEl: '.review-team-button-prev'}}>
            {
              data.teams.map((team, index) =>
              (
                <SwiperSlide>
                  <div className={`${selectedId === index ? 'bg-card border text-white' : 'bg-card '} flex flex-row justify-center items-center p-3 rounded-2xl gap-5 cursor-pointer`} key={team} onClick={() => handleTeamClick(index)}>
                    <img className='h-12' src={team.icon} alt='team icon'/>
                    <h1 className='text-white text-xl font-bold'>{team.name}</h1>
                  </div>
                </SwiperSlide>
                
              ))
            }
          </Swiper>
          <img className='cursor-pointer icon-arrow-long-right w-10 -scale-x-100 review-team-button-next' src='./img/arrow.png' alt='arrow'/>
        </div>
        <div className='w-full h-full flex flex-row justify-center items-center text-center 2xl:gap-8 mt-5'>
          <img className='cursor-pointer icon-arrow-long-left w-10 review-player-button-prev' src='./img/arrow.png' alt='arrow'/>
          <Swiper loop={true} modules={[Navigation]} className='h-full' spaceBetween={32} slidesPerView={1} breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,
        },
      }} navigation={{nextEl: '.review-player-button-next',prevEl: '.review-player-button-prev'}}>
            {
              data.teams[selectedId].players.map((player) => (
                <SwiperSlide className='h-full' key={player}>
                  <div className='bg-card h-full rounded-3xl flex flex-col p-5 2xl:gap-3'>
                    <div className='flex 2xl:flex-row flex-col w-full justify-center items-center 2xl:gap-3'>
                      <div className='flex flex-col 2xl:flex-grow'>
                        <h1 className='text-white font-bold text-2xl'>{player.name}</h1>
                        <h2 className='text-hl font-semibold text-md'>@{player.discord}</h2>
                      </div>
                      <img className='2xl:w-18 w-16 rounded-full' src={player.icon} alt='player icon'/>
                    </div>
                    <div className='w-full flex-grow flex flex-row'>
                      <div className='h-full flex-1 flex flex-col text-left'>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/LOL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>League of Legends</h1>
                            {
                              player.LLOL !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>{player.RLOL} - <a className='underline' href={player.LLOL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/TFT.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>TeamFight Tactics</h1>
                            {
                              player.LTFT !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>{player.RTFT} - <a className='underline' href={player.LTFT}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/VL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>Valorant</h1>
                            {
                              player.LVAL !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>{player.RVAL} - <a className='underline' href={player.LVAL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/RL.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>Rocket League</h1>
                            {
                              player.LROL !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>{player.RROL} - <a className='underline' href={player.LROL}>link</a></h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      <div className='h-full flex-1 flex flex-col text-left'>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/FT.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>Fortnite</h1>
                            {
                              player.PFTN !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>Pseudo : {player.PFTN}</h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/SSBU.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>SSBU</h1>
                            {
                              player.SSBU !== "" ? (
                                <h1 className='text-[#00FF00] 2xl:text-lg text-xs font-semibold'>✔</h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/TM.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>Trackmania</h1>
                            {
                              player.PTRM !== "" ? (
                                <h1 className='text-white 2xl:text-lg text-xs font-semibold'>Pseudo : {player.PTRM}</h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
                              )
                            }
                          </div>
                        </div>
                        <div className='w-full flex-1 flex flex-col 2xl:flex-row 2xl:text-left items-center text-center 2xl:gap-2'>
                          <img className='2xl:w-11 2xl:h-11 w-8 h-8' src='./img/logo/Quizz.png' alt='game icon'/>
                          <div className='h-full flex-grow flex flex-col justify-center 2xl:text-left text-center'>
                            <h1 className='text-hl 2xl:text-lg text-xs font-bold'>Quizz</h1>
                            {
                              player.QUIZ !== "" ? (
                                <h1 className='text-[#00FF00] 2xl:text-lg text-xs font-semibold'>✔</h1>
                              ) : (
                                <h1 className='text-[#FF0000] 2xl:text-lg text-xs font-semibold'>✘</h1>
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
          <img className='cursor-pointer icon-arrow-long-right w-10 review-player-button-next -scale-x-100' src='./img/arrow.png' alt='arrow'/>
        </div>
      </div>

    </div>
    
  )
}

export default Equipes
