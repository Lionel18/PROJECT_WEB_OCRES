import './App.css';
import Filmographie from './components/Filmographie/Filmographie'
import Banque from './components/Banque/Banque'
import Meteo from './components/Meteo/Meteo'
import News from './components/News/News'
import Stats from './components/Stats/Stats'
import Rappel from './components/Rappel/Rappel';


import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <div>
      <Rappel />

      <Filmographie />
      <Banque />
      <Meteo />
      <News />
      <Stats />
    </div>
  );
}

export default App;
