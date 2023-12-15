import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import { SingleEliminationBracket, Match } from '@g-loot/react-tournament-brackets';

let teams  = 
[
  { 'name' : 'EXODIA', 'icon' : './img/logo/Exodia.png', 'pts' : '36', 'pts_quizz' : '2', 'pts_ftn' : '8', 'pts_ssbu' : '8', 'pts_tft' : '8', 'pts_rl' : '10'},
  { 'name' : 'NULARY', 'icon' : './img/logo/nulary.png', 'pts' : '34', 'pts_quizz' : '5', 'pts_ftn' : '10', 'pts_ssbu' : '7', 'pts_tft' : '4', 'pts_rl' : '8'},
  { 'name' : 'LOST AUTISTOS 93', 'icon' : './img/logo/LA93.png', 'pts' : '32', 'pts_quizz' : '8', 'pts_ftn' : '7', 'pts_ssbu' : '5', 'pts_tft' : '6', 'pts_rl' : '6'},
  { 'name' : 'POLARY', 'icon' : './img/logo/Polary.png', 'pts' : '26', 'pts_quizz' : '10', 'pts_ftn' : '1', 'pts_ssbu' : '2', 'pts_tft' : '10', 'pts_rl' : '3'},
  { 'name' : 'CALECON FREEGUN', 'icon' : './img/logo/CF.png', 'pts' : '24', 'pts_quizz' : '8', 'pts_ftn' : '2', 'pts_ssbu' : '10', 'pts_tft' : '3', 'pts_rl' : '1'},
  { 'name' : 'GG CALL DRAKE', 'icon' : './img/logo/GGCDR.png', 'pts' : '21', 'pts_quizz' : '3', 'pts_ftn' : '5', 'pts_ssbu' : '6', 'pts_tft' : '5', 'pts_rl' : '2'},
  { 'name' : 'UNO', 'icon' : './img/logo/UNO.png', 'pts' : '20', 'pts_quizz' : '1', 'pts_ftn' : '4', 'pts_ssbu' : '1', 'pts_tft' : '7', 'pts_rl' : '7'},
  { 'name' : 'GG CALL DOG', 'icon' : './img/logo/GGCDO.png', 'pts' : '19', 'pts_quizz' : '6', 'pts_ftn' : '3', 'pts_ssbu' : '3', 'pts_tft' : '2', 'pts_rl' : '5'},
  { 'name' : 'SLYP', 'icon' : './img/logo/SLYP.png', 'pts' : '19', 'pts_quizz' : '4', 'pts_ftn' : '6', 'pts_ssbu' : '4', 'pts_tft' : '1', 'pts_rl' : '4'},
]

const matches = [
  {
    "id": 19753,
    "nextMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": []
  },
  {
    "id": 19754,
    "nextMatchId": 19753,
    "tournamentRoundText": "2",
    "participants": [
      {
        "id": "14754a1a-932c-4992-8dec-f7f94a339960",
        "resultText": "3",
        "isWinner": true,
        "status": "PLAYED",
        "name": "EXODIA",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "d8b9f00a-0ffa-4527-8316-da701894768e",
        "resultText": "0",
        "isWinner": false,
        "status": null,
        "name": "CALECON FREEGUN",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19755,
    "nextMatchId": 19754,
    "tournamentRoundText": "1",
    "participants": [
      {
        "id": "14754a1a-932c-4992-8dec-f7f94a339960",
        "resultText": "3",
        "isWinner": true,
        "status": "PLAYED",
        "name": "EXODIA",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
        "resultText": "0",
        "isWinner": false,
        "status": "PLAYED",
        "name": "GG CALL DOG",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19756,
    "nextMatchId": 19754,
    "tournamentRoundText": "1",
    "state": "",
    "participants": [
      {
        "id": "d8b9f00a-0ffa-4527-8316-da701894768e",
        "resultText": "3",
        "isWinner": true,
        "status": null,
        "name": "CALECON FREEGUN",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "d8b9f00a-0ffa-4527-8316-da701894768f",
        "resultText": "2",
        "isWinner": false,
        "status": null,
        "name": "POLARY",
        "picture": "teamlogos/client_team_default_logo"
      },
    ]
  },
  {
    "id": 19757,
    "nextMatchId": 19753,
    "tournamentRoundText": "2",
    "state": "",
    "participants": [
      {
        "id": "9397971f-4b2f-44eb-a094-722eb286c59b",
        "resultText": "",
        "isWinner": false,
        "status": null,
        "name": "NULARY",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "42fecd89-dc83-4821-80d3-718acb50a30c",
        "resultText": "",
        "isWinner": false,
        "status": null,
        "name": "LOS AUTISTO 93",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19758,
    "nextMatchId": 19757,
    "tournamentRoundText": "1",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": [
      {
        "id": "9397971f-4b2f-44eb-a094-722eb286c59b",
        "resultText": "0",
        "isWinner": false,
        "status": null,
        "name": "UNO",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "9397971f-4b2f-44eb-a094-722eb286c59c",
        "resultText": "3",
        "isWinner": true,
        "status": null,
        "name": "NULARY",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19759,
    "nextMatchId": 19757,
    "tournamentRoundText": "1",
    "startTime": "",
    "state": "",
    "participants": [
      {
        "id": "42fecd89-dc83-4821-80d3-718acb50a30c",
        "resultText": "3",
        "isWinner": true,
        "status": null,
        "name": "LOS AUTISTO 93",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "df01fe2c-18db-4190-9f9e-aa63364128fe",
        "resultText": "0",
        "isWinner": false,
        "status": null,
        "name": "GG CALL DRAKE",
        "picture": "/img/logo/DDCDR.png"
      }
    ]
  }
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
          <div className='flex justify-center items-center'>
            <div>
              <SingleEliminationBracket matches={matches} matchComponent={Match}/>
            </div>
          </div>
            
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Classement
