import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios'

const Statistiques = (props) => {

    const [stat, setStat] = useState({
        nombreCas: 0,
        nombreDeces: 0,
        nombreGueris: 0
    })

    const refresh = () => {
        getStats()
    }


    const getStats = () => {
        axios.get('https://coronavirusapi-france.now.sh/FranceLiveGlobalData').then(res => {
            setStat({
                nombreCas: res.data.FranceGlobalLiveData[0].casConfirmes,
                nombreDeces: res.data.FranceGlobalLiveData[0].deces,
                nombreGueris: res.data.FranceGlobalLiveData[0].gueris
            })
        })
    }


    useEffect(() => {
        // quand le composant a fini de charger, on appelle l'api covid france
        getStats()
    }, [])

    return (
        <div>
            <Jumbotron>
                <div style={{ textAlign: "center" }}>
                    <h1 className="display-4">Widget Statistiques du COVID-19</h1>
                    <p className="lead">S'informer en temps réel sur les statistiques du Covid-19 en France</p>
                </div>

                {stat &&
                    <>
                        <div style={{ textAlign: "center", fontSize: "25px", fontFamily: "Courier New" }}>

                            <Button style={{ marginBottom: "25px" }} color="primary" onClick={refresh}> Actualiser </Button>

                            <section>
                                <p>Nombre de cas : {stat.nombreCas}</p>
                                <p>Nombre de décès : {stat.nombreDeces}</p>
                                <p>Nombre de personnes guéris : {stat.nombreGueris}</p>
                            </section>
                        </div>

                        <hr></hr>
                        <Container>
                            <Row>
                                <Col>
                                    <h3 style={{ marginBottom: "20px", fontFamily: "Times New Roman" }}>Mesures de précautions à adopter :</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src="https://www.avenir-communication.com/wp-content/uploads/2020/05/masque-protection-3-plis.png" width="90px" height="70px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Le port du masque est obligatoire</span>
                                </Col>
                                <Col>
                                    <img src="https://i.pinimg.com/originals/19/8a/1c/198a1c1268d54c8ae19ecc05aa5a56db.png" width="70px" height="90px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Se laver les mains régulièrement</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src="https://cdn4.iconfinder.com/data/icons/prevent-spread-coronavirus/2000/1-16-01-512.png" width="90px" height="80px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Garder 1 mètre de distance</span>
                                </Col>
                                <Col>
                                    <img src="https://www.tunisienumerique.com/wp-content/uploads/2020/03/Coronavirus-Instagram-annonce-6-nouveaut%C3%A9s-2.png" width="150px" height="70px" />
                                    <span style={{ fontSize: "19px", fontWeight: "bold", marginLeft: "10px" }}>Sauver des vies en restant chez vous</span>
                                </Col>
                            </Row>
                        </Container>
                    </>
                }
            </Jumbotron>
        </div>
    );
}

export default Statistiques