import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'reactstrap';
import axios from 'axios' // permet de faire les appels à l'api (la nôtre ou une api externe)
import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
      selectedIndex: 0
    };
  }

  handleClick(i) {
    this.setState(
      {
        selectedIndex: i,
      }
    );
  }


  componentDidMount() {
    // une fois que le composant a fini le chargement
    // on appelle l'api pour récuprérer les données
    axios.get('http://localhost:3100/news').then(res => {
      this.setState({ profils: res.data })
    })
  }


  render() {
    return (
      <body>
        <Jumbotron>
          <div style={{ textAlign: "center" }}>
            <h1 className="display-4">Widget News</h1>
            <p className="lead">Soyez informé sur divers domaines du monde !</p>
          </div>
          <div className="profil">

            <ButtonGroup>
              {this.state.profils.map((profil, index) => (
                <Button outline color="secondary" key={'button' + index} onClick={() => this.handleClick(index)}>{profil.nom}</Button>
              ))}
            </ButtonGroup>

          </div>

          {this.state.profils.length > 0 && <div className="carte1">
            <h2> {this.state.profils[this.state.selectedIndex].nom} </h2>
            <img className="photo" src={this.state.profils[this.state.selectedIndex].photo} alt="Profil picture" />
            <div>
              <div className="actualite">
                <p>{this.state.profils[this.state.selectedIndex].actualite}</p>
              </div>
            </div>
          </div>}
        </Jumbotron>

      </body>
    );
  }

}



export default News;



