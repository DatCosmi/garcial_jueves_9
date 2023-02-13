import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import logo from "./img/utd_1674510441169.jpg";
import foto from "./img/foto.jpeg";
import Mapa from "./components/Mapa";
import Home from "./components/Home";
import Carrusel from "./components/Carrusel";
import Curriculum from "./components/Curriculum";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/alumno">
          <div className="container">
            <h1>Carlos Iván García López</h1>
          </div>
        </Route>
        <Route path="/carrera">
          <div className="container">
            <h1>Desarrollo de Software Multiplataforma</h1>
          </div>
        </Route>
        <Route path="/universidad">
          <div className="container">
            <h1>Universidad Tecnológica de Durango</h1>
          </div>
        </Route>
        <Route path="/logo">
          <div className="logo">
            <img src={logo} />
          </div>
        </Route>
        <Route path="/foto">
          <div className="foto">
            <img src={foto} />
          </div>
        </Route>
        <Route path="/mapa">
          <Mapa />
        </Route>
        <Route path="/carrusel">
          <Carrusel />
          <br />
          <Button variant="light" as={Link} to="/">
            Regresar
          </Button>
        </Route>
        <Route path="/curriculum">
          <Curriculum />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
