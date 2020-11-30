
import React, { useState } from "react";
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon, Container, Row, Col } from 'reactstrap';


const Rappel = (props) => {



	const [newRappel, setNewRappel] = useState(null)
	const [rappels, setRappels] = useState([])
	const [rappelsTermines, setRappelsTermines] = useState([])

	const ajouterRappel = () => {
		// fonction pour ajouter un rappel à la liste des rappels

		let newRappels = [...rappels] // on créé une copie de la liste des rappels
		newRappels.push({
			text: newRappel
		})

		setRappels(newRappels)
		setNewRappel("")
	}

	const supprimerRappel = (index) => {
		let newRappelsTermines = [...rappelsTermines]
		newRappelsTermines.splice(index, 1)
		setRappelsTermines(newRappelsTermines)
	}


	const handleCheck = (checked, index) => {
		let newRappels = [...rappels] // on créé une copie de la liste des rappels
		let newRappelsTermines = [...rappelsTermines]


		newRappelsTermines.push(newRappels[index]);
		newRappels.splice(index, 1)

		setRappels(newRappels)
		setRappelsTermines(newRappelsTermines)
	}

	return (
		<div>
			<Jumbotron>
				<h1 className="display-4">Widget Rappel</h1>
				<p className="lead">Créer des rappels</p>


				<InputGroup>
					<Input type="text" placeholder="Ajouter un rappel" onChange={e => setNewRappel(e.target.value)} value={newRappel} />
					<InputGroupAddon addonType="append">
						<Button color="info" onClick={ajouterRappel}> Ajouter </Button>
					</InputGroupAddon>
				</InputGroup>

				<hr></hr>
				<Container>
					<Row>
						<Col sm="8">
							<h2 style={{ marginTop: "15px", marginBottom: "30px" }}> <span style={{ border: "thick double red", padding: "5px" }}>Rappels</span> </h2>
							{rappels.map((rappel, index) => (
								<div key={'rappel' + index}>
									<Input type="checkbox" onChange={e => handleCheck(e.target.checked, index)} /> <span style={{ fontSize: "20px" }}>{rappel.text}</span>
								</div>

							))}
						</Col>
						<Col sm="4">
							<h2 style={{ marginTop: "15px", marginBottom: "30px" }}> <span style={{ border: "thick double green", padding: "5px" }}>Terminés</span> </h2>
							{rappelsTermines.map((rappel, index) => (
								<div key={'rappelTermines' + index}>
									<span style={{ textDecoration: "line-through", fontSize: "20px", marginRight: "10px" }}>{rappel.text}</span>
									<Button color="danger" onClick={() => supprimerRappel(index)}>Supprimer</Button>
								</div>

							))}
						</Col>
					</Row>
				</Container>

			</Jumbotron>
		</div>
	)
}


export default Rappel