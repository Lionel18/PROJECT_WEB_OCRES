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
    photo: 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487091465187-9IXPUDR5TO1IBEF2CT2F/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/07-Weather.png'

}, {

    ville: "Paris",
    date: "30/11/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487091465187-9IXPUDR5TO1IBEF2CT2F/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/07-Weather.png'

}, {

    ville: "Paris",
    date: "01/12/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487091465187-9IXPUDR5TO1IBEF2CT2F/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/07-Weather.png'

}, {

    ville: "Paris",
    date: "02/12/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Weather-sun-thorm-shower.svg/1200px-Weather-sun-thorm-shower.svg.png'

}, {

    ville: "Paris",
    date: "03/12/2020",
    tempM: 9,
    tempAM: 14,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Weather-sun-thorm-shower.svg/1200px-Weather-sun-thorm-shower.svg.png'

}, {

    ville: "Paris",
    date: "04/12/2020",
    tempM: 9,
    tempAM: 11,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Weather-sun-thorm-shower.svg/1200px-Weather-sun-thorm-shower.svg.png'

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

                <div style={{ textAlign: 'center', fontSize: "20px" }} key={"first"}>
                    <figcaption>
                        <img src={meteos[0].photo} width="170px" height="170px" alt="image" />
                    </figcaption>
                    <section>
                        <p>Date d'aujourd'hui : {meteos[0].date}</p>
                        <p>Température matin : {meteos[0].tempM}</p>
                        <p>Température après-midi : {meteos[0].tempAM}</p>
                    </section>
                </div>
                <hr></hr>


                <Container>

                    <Row>
                        {meteos.slice(1, meteos.length).map((meteo, index) => (
                            <Col sm="4">
                                <div key={'meteo' + index}>
                                    <figcaption>
                                        <img src={meteo.photo} width="60px" height="60px" alt="image" />
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