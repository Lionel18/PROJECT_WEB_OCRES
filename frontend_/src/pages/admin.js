import React, { Component } from "react";
import './admin.css';
import { Button } from 'reactstrap';

export default function Admin() {
  const [TempAM, setTempAM] = React.useState("");
  const [TempPM, setTempPM] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      TemperatureAM: ${TempAM}
      TemperaturePM: ${TempPM}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

  return (

    <div className="main">
      <form onSubmit={handleSubmit}>

        <div className="admin">
          <h1>Page admin</h1>
        </div>

        <div className="InfoTempAM">
          <label>
            Température matin:
        <input
              name="TempM"
              type="number"
              value={TempAM}
              placeholder="°C"
              onChange={e => setTempAM(e.target.value)}
              required />
          </label>
        </div>

        <div className="InfoTempPM">
          <label>
            Température après-midi:
        <input
              name="TempPM"
              type="number"
              placeholder="°C"
              value={TempPM}
              onChange={e => setTempPM(e.target.value)}
              required />
          </label>
        </div>


        <div className="InfoTerms">
          <label>
            <input
              name="acceptedTerms"
              type="checkbox"
              onChange={e => setAcceptedTerms(e.target.value)}
              required />
        En cliquant ce bouton, j'accepte les conditions d'utilisations de ces 6 widgets.
      </label>
        </div>


        <Button color="primary" onClick={() => window.location = "/"}>Envoyer</Button>
      </form>
    </div>
  );
}