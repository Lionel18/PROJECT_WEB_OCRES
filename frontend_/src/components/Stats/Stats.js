import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const stats = [{

    ville: "Paris",
    date: "28/11/2020",
    tempM: 4,
    tempAM: 12,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Lyon",
    date: "28/11/2020",
    tempM: 5,
    tempAM: 13,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/12/61b19da99bcd6a1dd49dac11a8f9d4bf.png'

}]

const Statistiques = (props) => {

    const [stat, setMeteo] = useState(stats[0])

    const actualiserStat = () => {
        // fonction qui va aller chercher les stats
        let actualiserStat = meteos.actualiser(a => a. == searchMeteo); // on cherche la ville avec le nom qui est écrit dans le champ de texte (input)
        setMeteo(foundMeteo) // on met à jour le state meteo pour afficher

    }

    return (
        <div>
            <Jumbotron>
                <h1 className="display-4">Widget Statistiques du COVID-19</h1>
                <p className="lead">S'informer en temps réel sur les statistiques du Covid-19 en France</p>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button onClick={findMeteo}> Actualiser </Button></InputGroupAddon>
                </InputGroup>

                {stat &&
                    <>
                        <figcaption>
                            <img src={stat.photo} width="150px" height="150px" alt="image" />
                        </figcaption>
                        <section>
                            <p>Nombre de cas : {stat.ville}</p>
                            <p>Nombre de décès : {stat.date}</p>
                            <p>Nombre de personnes guéris : {stat.tempM}</p>
                        </section>
                    </>
                }
            </Jumbotron>
        </div>
    );
}

export default Statistiques