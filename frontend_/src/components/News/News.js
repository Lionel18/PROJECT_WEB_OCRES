import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'reactstrap';

import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [
        {
          nom: 'News US',
          photo: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc2MzAyNDY4NjM0NzgwODQ1/joe-biden-gettyimages-1267438366.jpg',
          actualite: 'Nouveau président des Etats-Unis !',
          background: "#D3D3D3"
        },
        {
          nom: 'News France',
          photo: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/emmanuel-macron/14862769-13-fre-FR/Emmanuel-Macron.jpg',
          actualite: "Macron s'engage pour la France",
          background: "#D3D3D3"
        },
        {
          nom: 'News sportives',
          photo: 'data:image/jpeg;base64,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',
          background: "#D3D3D3",
          actualite: "Jeune espoire Français pour la NBA !",
        },

      ],
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

          <div className="carte1">
            <h2> {this.state.profils[this.state.selectedIndex].nom} </h2>
            <img className="photo" src={this.state.profils[this.state.selectedIndex].photo} alt="Profil picture" />
            <div>
              <div className="actualite">
                <p>{this.state.profils[this.state.selectedIndex].actualite}</p>
              </div>
            </div>
          </div>
        </Jumbotron>

      </body>
    );
  }

}



export default News;



