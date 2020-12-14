
import './banque.css';
import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';


const Banque = () => {


	const [ajout, setAjout] = useState(0);
	const [retirer, setRetirer] = useState(0);
	const [solde, setSolde] = useState(0);
	const [historiqueSolde, setHistoriqueSolde] = useState([])

	function calculateAjout() {
		setSolde(ajout + solde);
		let historique = [...historiqueSolde] // on créé une copie de la liste historique
		let jour = historique.length + 1
		historique.push({ name: 'Jour ' + jour, uv: (solde + ajout), pv: 2400, amt: 1200 })

		setHistoriqueSolde(historique)
	}

	function calculateRetirer() {
		setSolde(solde - retirer);
		let historique = [...historiqueSolde] // on créé une copie de la liste historique
		let jour = historique.length + 1
		historique.push({ name: 'Jour ' + jour, uv: (solde - retirer), pv: 2400, amt: 1200 })

		setHistoriqueSolde(historique)
	}



	return (

		<div>
			<Jumbotron>
				<div style={{ textAlign: "center" }}>
					<h1 className="display-4">Widget Banque</h1>
					<p className="lead">Bonjour et bienvenue sur votre espace client pour gérer votre solde bancaire.</p>
				</div>
				<InputGroup>
					<Input type="number" placeholder="Ajouter €" onChange={e => setAjout(+e.target.value)} />
					<InputGroupAddon addonType="append">
						<Button color="success" onClick={calculateAjout}> Ajouter </Button>
					</InputGroupAddon>
				</InputGroup>

				<InputGroup style={{ marginTop: "20px" }}>
					<Input type="number" placeholder="Retirer €" onChange={e => setRetirer(+e.target.value)} />
					<InputGroupAddon addonType="append">
						<Button color="danger" onClick={calculateRetirer}> Retirer </Button>
					</InputGroupAddon>
				</InputGroup>

				<hr></hr>
				<div className="TotalArgent" style={{ textAlign: 'center', marginTop: "30px" }}>
					<h1>Le solde de votre compte est de : {solde} €</h1>
				</div>

				<LineChart width={600} height={300} data={historiqueSolde} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }} >
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="name" />
					<YAxis />
				</LineChart>

			</Jumbotron>

		</div >

	);

}

export default Banque