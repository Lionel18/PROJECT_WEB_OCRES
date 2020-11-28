class WeatherWidget extends React.Component {
  constructor(props) {
      // Les props c'est les inputs de ton component
    super(props);
    // Le state c'est le context de ton component qu'est amener a changer a l'initialisation ou quand l'user clique sur un bouton par exemple
    this.state = {
        day0WeatherMin: "4",
        day0WeatherMax: "12",
        day1WeatherMin: "2",
        day1WeatherMax: "10",
    };
  }

  // Ca c'est la méthode qu'est lancé apres que le component soit render a l'init
  componentDidMount() {
    // Donc ici tu mettras tes calls d'api normalement
  }
  
  // Et ici c'est ton code html
  render() {
    return (
      <div>
        <h1>Meteo a Paris</h1>
        <div>Aujourd'hui {this.state.day0WeatherMin}</div>
        <div>Aujourd'hui {this.state.day0WeatherMax}</div>
        <div>Demain {this.state.day1WeatherMin}</div>
        <div>Demain {this.state.day1WeatherMax}</div>
      </div>
    );
  }
}

ReactDOM.render(<WeatherWidget /* Ici t'ajoutes les props, c'est si ton component a des inputs mais normalement t'utiliseras que le state toi*//>, document.getElementById('root'));