import Home from './pages/Home';
import Format from './pages/Format';
import Calendrier from './pages/Calendrier';
import Jeux from './pages/Jeux';
import Equipes from './pages/Equipes';
import Resultats from './pages/Resultats';
import Classement from './pages/Classement';

function App() {
  return (
    <div className='w-screen h-screen bg-bg snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar'>
        <Home />
        <Format />
        <Calendrier />
        <Jeux />
        <Equipes />
        <Resultats />
        <Classement />
    </div>
  );
}

export default App;
