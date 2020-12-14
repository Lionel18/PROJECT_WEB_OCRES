import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './filmographie.css'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import axios from 'axios';

const films = [{

    Title: "Bad boys",
    Released: "22/11/2018",
    Runtime: "120 min",
    Genre: "Action",
    Plot: "Très bon film",
    Poster: 'https://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg'

}]

const Filmographie = (props) => {

    const [film, setFilm] = useState(null)

    const [searchFilm, setSearchFilm] = useState("Titanic")

    const getFilm = () => {
        const api_key = "7c16a712";
        const api_url = "http://www.omdbapi.com/";
        axios.get(api_url + '?apikey=' + api_key + '&t=' + searchFilm).then(res => {
            console.log(res.data)
            if (res.data.Response == "False") {
                alert("Film introuvable")
            } else {
                setFilm(res.data)
            }
        })
    }

    useEffect(() => {
        getFilm()
    }, [])

    const findFilm = () => {
        // fonction qui va aller chercher le film avec le nom
        let foundFilm = films.find(f => f.nom == searchFilm); // on cherche le film avec le nom qui est écrit dans le champ de text (input)
        setFilm(foundFilm) // on met à jour le state film pour afficher
    }

    return <div>
        <Jumbotron >
            <div style={{ textAlign: "center" }}>
                <h1 className="display-4">Widget Filmographie</h1>
                <p className="lead">Cherchez des films avec ce widget</p>
            </div>
            <InputGroup>
                <Input type="text" placeholder="Rechercher un film" onChange={event => setSearchFilm(event.target.value)} />
                <InputGroupAddon addonType="prepend"><Button color="warning" onClick={getFilm}> Explorer </Button></InputGroupAddon>
            </InputGroup>
            <div style={{ textAlign: 'center', marginTop: "30px", fontSize: "23px", fontFamily: "Serif" }}>
                {film &&
                    <>
                        <figcaption>
                            <img src={film.Poster} width="170px" height="230px" alt="image" />
                        </figcaption>
                        <section style={{ marginTop: "30px" }}>
                            <p>Nom du film : {film.Title}</p>
                            <p>Date de sortie : {film.Released}</p>
                            <p>Genre : {film.Genre}</p>
                            <p>Synopsis : {film.Plot}</p>
                            <p>Durée : {film.Runtime} </p>
                        </section>
                    </>
                }
            </div>
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