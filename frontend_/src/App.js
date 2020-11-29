import './App.css';
import Filmographie from './components/Filmographie/Filmographie'
import Banque from './components/Banque/Banque'
import Meteo from './components/Meteo/Meteo'
import News from './components/News/News'
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <div>
      <Filmographie />
      <Banque />
      <Meteo />
      <News />
    </div>
  );
}

export default App;
