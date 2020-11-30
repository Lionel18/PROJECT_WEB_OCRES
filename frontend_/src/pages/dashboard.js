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

            <h1 style={{ textAlign: 'center', fontSize: "60px", fontFamily: "Courier" }}>DASHBORD</h1>
            <Container>
                <Row>
                    <Col>
                        <Rappel />
                    </Col>
                    <Col>
                        <Filmographie />
                    </Col>
                    <Col>
                        <Banque />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Meteo />
                    </Col>
                    <Col>
                        <News />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Stats />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Dashboard