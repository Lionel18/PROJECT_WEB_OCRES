import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './filmographie.css'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const films = [{

    nom: "Bad boys",
    date: "22/11/2018",
    duree: 120,
    genre: "Action",
    synopsis: "Très bon film",
    photo: 'https://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg'

}, {
    nom: "Taxi 5",
    date: "25/11/2017",
    duree: 110,
    genre: "Action",
    synopsis: "Très bon film et drôle",
    photo: 'https://fr.web.img3.acsta.net/pictures/18/03/09/12/16/2548759.jpg'

}, {

    nom: "Soorarai Pottru",
    date: "12/11/2020",
    duree: 190,
    genre: "Drame/Action",
    synopsis: "Magnifique film avec un très bon Surya en forme",
    photo: 'https://www.pinkvilla.com/files/styles/contentpreview/public/soorarai_pottru_suriyas_fans_request_actor_to_reconsider_the_decision_of_films_direct_release_on_an_ott_platform.jpg?itok=isALj45O'

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
        <Jumbotron >
            <div style={{ textAlign: "center" }}>
                <h1 className="display-4">Widget Filmographie</h1>
                <p className="lead">Cherchez des films avec ce widget</p>
            </div>
            <InputGroup>
                <Input type="text" placeholder="Rechercher un film" onChange={event => setSearchFilm(event.target.value)} />
                <InputGroupAddon addonType="prepend"><Button color="warning" onClick={findFilm}> Explorer </Button></InputGroupAddon>
            </InputGroup>
            <div style={{ textAlign: 'center', marginTop: "30px", fontSize: "23px", fontFamily: "Serif" }}>
                {film &&
                    <>
                        <figcaption>
                            <img src={film.photo} width="170px" height="230px" alt="image" />
                        </figcaption>
                        <section style={{ marginTop: "30px" }}>
                            <p>Nom du film : {film.nom}</p>
                            <p>Date de sortie : {film.date}</p>
                            <p>Genre : {film.genre}</p>
                            <p>Synopsis : {film.synopsis}</p>
                            <p>Durée : {film.duree} min </p>
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