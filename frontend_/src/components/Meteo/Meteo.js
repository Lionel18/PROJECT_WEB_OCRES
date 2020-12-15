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

                
                <Jumbotron>
                    <div style={{ textAlign: "center" }}>
                        <h1 className="display-4">Widget Météorologie</h1>
                        <p className="lead">Trouver la météo de votre ville</p>
                    </div>
                    <InputGroup>
                        <Input type="text" className="search-bar" placeholder="Météo de ta ville" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                        <InputGroupAddon addonType="prepend"><Button color="warning" onClick={search}> Rechercher </Button></InputGroupAddon>
                    </InputGroup>

                    {(typeof weather.main != "undefined") ? (
                        <div>

                            <div style={{ textAlign: "center" }}>
                                <div className="location" style={{ fontSize: "25px", marginTop: "15px" }}>{weather.name}</div>
                                <sup> {weather.sys.country} </sup>
                            </div>
                            {/*<InputGroup>
                                <Input type="text" placeholder="Rechercher une ville" onChange={event => setSearchMeteo(event.target.value)} />
                                <InputGroupAddon addonType="prepend"><Button onClick={findMeteo}> Trouver </Button></InputGroupAddon>
                            </InputGroup>*/}



                            <div style={{ textAlign: 'center', fontSize: "20px" }} >
                                <figcaption>


                                    <div className="icon">
                                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                                    </div>
                                    <h4>{weather.weather[0].description}</h4>

                                    <div style={{ textAlign: "center" }}> {dateBuilder(new Date())}</div>

                                </figcaption>

                                {/*<InputGroup>   
                                    <InputGroupAddon addonType="prepend" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} ><Button color="warning"> Actualiser </Button></InputGroupAddon>
                                </InputGroup>*/}



                                <section>

                                    <hr></hr>

                                    <div className="temps"> {Math.round(weather.main.temp)}°C </div>

                                </section>
                            </div>





                        </div>

                    ) : ('')}
                </Jumbotron>
            </main>
        </div>
    );
}


export default Meteorologie