
import './banque.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import moment from "moment";
import 'moment/min/locales'
moment.locale('fr')



const Banque = () => {


	const [ajout, setAjout] = useState(0);
	const [retirer, setRetirer] = useState(0);
	const [solde, setSolde] = useState(0);
	const [historiqueSolde, setHistoriqueSolde] = useState([])

	const getBanque = () => {
		axios.get('http://localhost:3100/banque').then(res => {
			setHistoriqueSolde(res.data)
			if (res.data.length > 0) {
				setSolde(res.data[res.data.length - 1].uv)
			} else {
				setSolde(0)
			}
		})
	}

	useEffect(() => {
		getBanque()
	}, [])
	function calculateAjout() {
		let h = { uv: (solde + ajout) }

		axios.post('http://localhost:3100/banque', h).then(res => {
			getBanque()
		})
	}

	function calculateRetirer() {

		let h = { uv: (solde - retirer) }

		axios.post('http://localhost:3100/banque', h).then(res => {
			getBanque()
		})
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
					<XAxis dataKey="name" tickFormatter={(date) => moment(date).format('L HH:mm')} />
					<YAxis />
				</LineChart>

			</Jumbotron>

		</div >

	);

}

export default Banque