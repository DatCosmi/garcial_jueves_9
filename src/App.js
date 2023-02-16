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
import Alumno from "./pages/Alumno";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-warning">
            INICIO
          </Link>
          <Link to="/Alumno" className="btn btn-dark">
            ALUMNO
          </Link>
          <Link to="/Mapa" className="btn btn-dark">
            MAPA
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/Inicio">
            <Inicio />
          </Route>
          <Route path="/Alumno">
            <Alumno />
          </Route>
          <Route path="/Mapa">
            <Mapa />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
