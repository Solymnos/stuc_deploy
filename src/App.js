import Home from './pages/Home';
import Format from './pages/Format';
import Calendrier from './pages/Calendrier';
import Jeux from './pages/Jeux';
import Equipes from './pages/Equipes';
import Classement from './pages/Classement';

function App() {
  return (
    <div className='absolute inset-0'>
      <div className='absolute inset-0 bg-bg snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar'>
        <Home />
        <Format />
        <Calendrier />
        <Jeux />
        <Equipes />
        <Classement />
      </div>
    </div>
    
  );
}

export default App;
