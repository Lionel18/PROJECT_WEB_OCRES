import './App.css';
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
        <Col xs='1' >
          <div style={{ height: "100vh", position: "fixed", textAlign: "center" }}>
            <div style={{ marginTop: "150px" }}>
              <Button onClick={() => window.location = '/'} style={{ width: "120px", marginLeft: "30px", marginBottom: "20px" }}>Dashboard</Button>
              <br></br>
              <Button onClick={() => window.location = '/admin'} style={{ width: "120px", marginLeft: "30px" }}>Admin</Button>
            </div>
          </div>

        </Col>




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
