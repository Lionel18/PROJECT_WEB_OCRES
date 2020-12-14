import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Input, InputGroup, InputGroupAddon, Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const api = {

    key: 'a7f510d7cc1590361ddb3edc60223343',
    base: "https://api.openweathermap.org/data/2.5/",


}
//https://openweathermap.org/forecast16#JSON
const Meteorologie = (props) => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const [icon, setIcon] = useState({});

    const search = event => {
        if (event.key === "Enter") {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=metric`)

                .then(res => res.json())
                .then(result => {
                    setQuery('');
                    setWeather(result);
                    console.log(result);

                });
        }
    }



    const [meteo, setMeteo] = useState(meteos[0])


    const dateBuilder = (d) => {
        let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre",
            "Novembre", "Decembre"];

        let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();

        return `${day} ${date} ${month}`
    }
    return (

        <div className={
            (typeof weather.main != "undefined") ? ((weather.main.temp > 16)
                ? 'meteo'
                : 'meteo cold ')
                : 'meteo cold '}>


            <main>

                <div style={{ textAlign: "center" }} className="search-box">
                    <input type="text" className="search-bar" placeholder="météo de ta ville" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                </div>


                {(typeof weather.main != "undefined") ? (
                    <div>

                        <div>
                            <h1 className="display-4">Widget Météorologie</h1>
                            <div className="location">{weather.name}</div>
                            <sup> {weather.sys.country} </sup>
                        </div>
                        {/*<InputGroup>
                                <Input type="text" placeholder="Rechercher une ville" onChange={event => setSearchMeteo(event.target.value)} />
                                <InputGroupAddon addonType="prepend"><Button onClick={findMeteo}> Trouver </Button></InputGroupAddon>
                            </InputGroup>*/}



                        <div style={{ textAlign: 'center', fontSize: "20px" }} >
                            <figcaption>

                                {/*
                                    <div className="icon">
                                         <img  src={' http://openweathermap.org/img/wn/${weather.weather.Icon}@2x.png'}/> 
                                    </div>
                                    */}


                            </figcaption>

                            {/*<InputGroup>   
                                    <InputGroupAddon addonType="prepend" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} ><Button color="warning"> Actualiser </Button></InputGroupAddon>
                                </InputGroup>*/}



                            <section>
                                <div style={{ textAlign: "left" }} className="date"> {dateBuilder(new Date())}</div>
                                <hr></hr>

                                <div className="temps"> {Math.round(weather.main.temp)}°C </div>

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




                    </div>

                ) : ('')}
            </main>
        </div>
    );
}



const meteos = [{



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

export default Meteorologie