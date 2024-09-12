import React , { useState } from 'react';
import styled from 'styled-components'
import Select from 'react-select'

const data = require('./data.json');

const Background = styled.div`
  min-height : 100vh;
  min-width : 100vw;
  background-size : cover;
  padding : 2rem;
  box-sizing : border-box;
  display : flex;
  flex-direction : column;
  gap : 2rem;
  position : fixed;
  z-index: -1;
`

const LogoContainer = styled.div`
  min-width : 100%;
  display : flex;
  align-items : center;
  justify-content : end;
  @media (max-width : 768px) {
    justify-content: center;
  }
`

const Logo = styled.img`
  height : auto;
  max-width : 24rem;

  @media (max-width: 768px) {
    max-width: 80%;
    height : auto;
  }
`

const SelectContainer = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  justify-content: center;
`

const StyledSelect = styled(Select)`
  width: 50%;
`

const options = [
  { value : 0, label : 'Division 1'},
  { value : 1, label : 'Division 2'},
  { value : 2, label : 'Division 3'}
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '2px solid ' + (state.isSelected ? 'white' : 'white'),
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color : 'white',
    font : 'bold'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: 'black',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color : 'white',
    boxShadow: 'none',
  }),
  input: (provided) => ({
    ...provided,
    color : 'white',
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent"
      },
      "::-webkit-scrollbar-thumb": {
        background: "transparent"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#transparent"
      }
  })
};



const TabContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing : border-box;
`

const TabLine = styled.div`
  width: 100%;
  color : black;
  background-color : rgb(255,255,255,0.7);
  display: flex;
  flex-direction: row;
  border: solid white 1px;
  border-radius: 1rem;
  padding: 0.5rem;
  box-sizing : border-box;
  min-height: 5rem;
  max-height: 5rem;
  cursor : pointer;
`

const TabLineT = styled.div`
  width: 100%;
  color : black;
  background-color: rgba(255,255,255,0.75);
  display: flex;
  flex-direction: row;
  border: solid white 1px;
  border-radius: 1rem;
  padding: 0.5rem;
  box-sizing : border-box;
  min-height: 5rem;
  max-height: 5rem;
  margin-bottom: 0.5rem;
`

const TeamLogo = styled.img`
  height: auto;
  width: auto;
  max-height: 4rem;
  max-width: 4rem;
  border-radius: 0.5rem;
`

const ElementContainer = styled.div`
  display: flex;
  flex : 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: medium;
`

const NameContainer = styled.div`
  flex : 4;
  font-weight: bold;
  font-size: large;
  align-items: center;
  display: flex;
  padding-left:0.35rem;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding : 5rem;
  box-sizing: border-box;
  @media (max-width:768px) {
    padding: 0.5rem;
  }
`

const DisplayContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  height: 100%;
  width: 50%;

  @media (max-width: 768px) {
    height : auto;
    width: 100%;
  }
`

const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height : auto;
    width: 100%;
  }
`

const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:0.5rem;
  @media (max-width: 768px) {
    height: auto;
  }
`


const OverContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:0.5rem;
  @media (max-width: 768px) {
    height: auto;
  }
`

const Title = styled.h1`
  color : white;
`

const Texte = styled.text`
  color : white;
`

function App() {

  const [ div, setDiv ] = useState(0);
  const defaultOption = options.find(option => option.value === div);

  const scheduleArray = data.divisions[div].schedule;

  return (
    <>
    <Background style={{backgroundImage : 'url(/okay_2.webp)'}}/>
      <ContentContainer>
        <LogoContainer>
          <Logo src='/title.webp' />
        </LogoContainer>
        <SelectContainer>
          <StyledSelect value={defaultOption} onChange={(e) => setDiv(e.value)} options={options} styles={customStyles} />
        </SelectContainer>
        <DisplayContainer>
          <LeftContainer>
            <Title>Classement :</Title>
            <TabLineT>
              <ElementContainer></ElementContainer>
              <NameContainer></NameContainer>
              <ElementContainer>Joués</ElementContainer>
              <ElementContainer>Gagnés</ElementContainer>
              <ElementContainer>Perdus</ElementContainer>
            </TabLineT>
            <TabContainer>
            {
              data.divisions[div].ranking.map((team) => (
                <TabLine onClick={() => { window.open(team.link, '_blank') }}>
                  <ElementContainer><TeamLogo src={team.logo}/></ElementContainer>
                  <NameContainer>{team.name}</NameContainer>
                  <ElementContainer>{team.played}</ElementContainer>
                  <ElementContainer>{team.win}</ElementContainer>
                  <ElementContainer>{team.lose}</ElementContainer>
                </TabLine>
              ))}
            </TabContainer>
          </LeftContainer>
          <RightContainer>
            <ScheduleContainer>
              <Title>Match à venir :</Title>
              {
                scheduleArray.length === 0 ? (
                  <Texte>Pas de matchs de prévus</Texte>
                ) :
                data.divisions[div].schedule.map((match) => (
                  <TabLine>
                    <ElementContainer><TeamLogo src={match.logo1}/></ElementContainer>
                    <ElementContainer>{match.team1}</ElementContainer>
                    <ElementContainer>{match.date} {match.heure}</ElementContainer>
                    <ElementContainer>{match.team2}</ElementContainer>
                    <ElementContainer><TeamLogo src={match.logo2}/></ElementContainer>
                  </TabLine>
                ))
              }
            </ScheduleContainer>
            <OverContainer>
              <Title>Derniers Résultats : </Title>
              {
                data.divisions[div].over.length === 0 ? (
                  <Texte>Pas encore de résultats</Texte>
                ) :
                data.divisions[div].over.map((match) => (
                  <TabLine>
                    <ElementContainer><TeamLogo src={match.logo1}/></ElementContainer>
                    <ElementContainer>{match.team1}</ElementContainer>
                    <ElementContainer>{match.score1}</ElementContainer>
                    <ElementContainer>{match.score2}</ElementContainer>
                    <ElementContainer>{match.team2}</ElementContainer>
                    <ElementContainer><TeamLogo src={match.logo2}/></ElementContainer>
                  </TabLine>
                ))
              }
            </OverContainer>
          </RightContainer>
        </DisplayContainer>
      </ContentContainer>
    </>
  );
}





export default App;
