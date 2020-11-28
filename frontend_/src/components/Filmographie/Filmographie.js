import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './filmographie.css'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const films = [{

    nom: "Bad boys",
    date: "25/11/2017",
    duree: 120,
    genre: "Action",
    synopsis: "Très bon film",
    photo: 'https://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg'

}, {
    nom: "Taxi 5",
    date: "25/11/2017",
    duree: 120,
    genre: "Action",
    synopsis: "Très bon film",
    photo: 'https://fr.web.img3.acsta.net/pictures/18/03/09/12/16/2548759.jpg'
}]

const Filmographie = (props) => {

    const [film, setFilm] = useState(films[0])

    const [searchFilm, setSearchFilm] = useState("")

    const findFilm = () => {
        // fonction qui va aller chercher le film avec le nom
        let foundFilm = films.find(f => f.nom == searchFilm); // on cherche le film avec le nom qui est écrit dans le champ de text (input)
        setFilm(foundFilm) // on met à jour le state film pour afficher

    }

    return <div>
        <Jumbotron>
            <h1 className="display-3">Widget Filmographie</h1>
            <p className="lead">Cherchez des films avec ce widget</p>
            <InputGroup>
                <Input type="text" placeholder="Rechercher un film" onChange={event => setSearchFilm(event.target.value)} />
                <InputGroupAddon addonType="prepend"><Button onClick={findFilm} >Rechercher</Button></InputGroupAddon>
            </InputGroup>

            {film &&
                <>
                    <figcaption>
                        <img src={film.photo} width="150px" height="200px" alt="image" />
                    </figcaption>
                    <section>
                        <p>Nom du film : {film.nom}</p>
                        <p>Date de sortie : {film.date}</p>
                        <p>Genre : {film.genre}</p>
                        <p>Synopsis : {film.synopsis}</p>
                        <p>Durée : {film.duree} min </p>
                    </section>
                </>
            }
        </Jumbotron>


    </div>
}

/*Filmographie.propTypes = {
    date : PropTypes.string.isRequired,
    film : PropTypes.string.isRequired,
    genre : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
    duree : PropTypes.number.isRequired
}*/

export default Filmographie