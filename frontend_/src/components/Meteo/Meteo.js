import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon, Container, Row, Col } from 'reactstrap';

const meteos = [{

    ville: "Paris",
    date: "28/11/2020",
    tempM: 4,
    tempAM: 12,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Paris",
    date: "29/11/2020",
    tempM: 5,
    tempAM: 11,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Paris",
    date: "30/11/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Paris",
    date: "01/01/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Paris",
    date: "02/01/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}, {

    ville: "Paris",
    date: "03/01/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/large/2014/11/6819ceccc4f2587143ed626c2bff46a1.png'

}]

const Meteorologie = (props) => {

    const [meteo, setMeteo] = useState(meteos[0])




    return (
        <div>
            <Jumbotron>
                <h1 className="display-4">Widget Météorologie</h1>
                <p className="lead">Météo Paris</p>
                {/*<InputGroup>
                    <Input type="text" placeholder="Rechercher une ville" onChange={event => setSearchMeteo(event.target.value)} />
                    <InputGroupAddon addonType="prepend"><Button onClick={findMeteo}> Trouver </Button></InputGroupAddon>
                </InputGroup>*/}

                <div style={{ textAlign: 'center' }} key={"first"}>
                    <figcaption>
                        <img src={meteos[0].photo} width="150px" height="150px" alt="image" />
                    </figcaption>
                    <section>
                        <p>Date d'aujourd'hui : {meteos[0].date}</p>
                        <p>Température matin : {meteos[0].tempM}</p>
                        <p>Température après-midi : {meteos[0].tempAM}</p>
                    </section>
                </div>


                <Container>

                    <Row>
                        {meteos.slice(1, meteos.length).map((meteo, index) => (
                            <Col sm="4">
                                <div key={'meteo' + index}>
                                    <figcaption>
                                        <img src={meteo.photo} width="30px" height="30px" alt="image" />
                                    </figcaption>
                                    <section>
                                        <p>{meteo.date}</p>
                                        <p>Température matin : {meteo.tempM}</p>
                                        <p>Température après-midi : {meteo.tempAM}</p>
                                    </section>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>



            </Jumbotron>
        </div>
    );
}

export default Meteorologie