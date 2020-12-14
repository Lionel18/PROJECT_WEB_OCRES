import './App.css';
import Media from 'react-media';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import Admin from './pages/admin';

import { Container, Row, Col, Button } from 'reactstrap';




function App() {




  return (

    <Router>

      <Row style={{ width: "100%" }}>
        <Media query="(min-width: 750px)">
          <Col xs='1' >
            <div style={{ height: "100vh", position: "fixed", textAlign: "center" }}>
              <div style={{ marginTop: "180px" }}>
                <Button onClick={() => window.location = '/'} style={{ width: "120px", margin: "10px" }}>Dashboard</Button>
                <br></br>
                <Button onClick={() => window.location = '/admin'} style={{ width: "120px", margin: "10px" }}>Admin</Button>
              </div>
            </div>

          </Col>
        </Media>




        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


        <Col xs="11">

          <Switch>

            <Route path="/admin">

              <Admin />

            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>

        </Col>






      </Row>
    </Router>




  );
}

export default App;
