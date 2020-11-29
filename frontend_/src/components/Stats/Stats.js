import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';


const Statistiques = (props) => {

    const [stat, setStat] = useState({
        nombreCas: 7673,
        nombreDeces: 763,
        nombreGueris: 876
    })

    const refresh = () => {
        setStat({
            nombreCas: 9009,
            nombreDeces: 887,
            nombreGueris: 1102
        })
    }

    return (
        <div>
            <Jumbotron>
                <h1 className="display-4">Widget Statistiques du COVID-19</h1>
                <p className="lead">S'informer en temps réel sur les statistiques du Covid-19 en France</p>

                {stat &&
                    <>
                        <div style={{ textAlign: "center" }}>                <Button onClick={refresh}> Actualiser </Button>

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
                                    <img src="https://assets.stickpng.com/images/5eaedd9743c27a0004fbf6ae.png" width="70px" height="70px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Le port du masque est très important</span>
                                </Col>
                                <Col>
                                    <img src="https://assets.stickpng.com/images/5eaedd9743c27a0004fbf6ae.png" width="70px" height="70px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Le port du masque est très important</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src="https://assets.stickpng.com/images/5eaedd9743c27a0004fbf6ae.png" width="70px" height="70px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Le port du masque est très important</span>
                                </Col>
                                <Col>
                                    <img src="https://assets.stickpng.com/images/5eaedd9743c27a0004fbf6ae.png" width="70px" height="70px" />
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>Le port du masque est très important</span>
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