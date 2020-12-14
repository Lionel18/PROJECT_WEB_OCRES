import React from 'react'

import Filmographie from '../components/Filmographie/Filmographie'
import Banque from '../components/Banque/Banque'
import Meteo from '../components/Meteo/Meteo'
import News from '../components/News/News'
import Stats from '../components/Stats/Stats'
import Rappel from '../components/Rappel/Rappel';

import { Container, Row, Col } from 'reactstrap';




const Dashboard = (props) => {




    return (
        <div>

            <h1 style={{ color: "white", textAlign: 'center', fontSize: "90px", fontFamily: "Courier" }}>DASHBORD</h1>
            <Container>
                <Row>
                    <Col>
                        <Stats />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Filmographie />
                    </Col>
                    <Col>
                        <News />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Meteo />
                    </Col>
                    <Col>
                        <Banque />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Rappel />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Dashboard