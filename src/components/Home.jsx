import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Alumno from "../pages/Alumno";
import Mockup from "../pages/Mockup";
import Inicio from "../pages/Inicio";
import Mapa from "./Mapa";
import Logout from "../pages/Logout";
import LoginPage from "../pages/LoginPage";
import { Container } from "react-bootstrap";
import Curriculum from "./Curriculum";
import Carrusel from "./Carrusel";
import logo from "../img/utd_1674510441169.jpg";
import foto from "../img/foto.jpeg";

function Home() {
  return (
    <Router>
      <Container className="btn-group">
        <Link to="/Inicio" className="btn btn-warning">
          INICIO
        </Link>
        <Link to="/Alumno" className="btn btn-dark">
          ALUMNO
        </Link>
        <Link to="/Foto" className="btn btn-dark">
          FOTO
        </Link>
        <Link to="/Carrera" className="btn btn-dark">
          CARRERA
        </Link>
        <Link to="/Universidad" className="btn btn-dark">
          UNIVERSIDAD
        </Link>
        <Link to="/Logo" className="btn btn-dark">
          LOGO
        </Link>
        <Link to="/Curriculum" className="btn btn-dark">
          CURRICULUM
        </Link>
        <Link to="/Carrusel" className="btn btn-dark">
          CARRUSEL
        </Link>
        <Link to="/Mapa" className="btn btn-dark">
          MAPA
        </Link>
        <Link to="/Mockup" className="btn btn-dark">
          MOCKUP
        </Link>
        <Link to="/Login" className="btn btn-dark">
          LOGIN
        </Link>
        <Link to="/Logout" className="btn btn-dark">
          LOGOUT
        </Link>
      </Container>
      <hr />
      <Switch>
        <Route path="/Inicio">
          <Inicio />
        </Route>
        <Route path="/Alumno">
          <Alumno />
        </Route>
        <Route path="/Foto">
          <div className="foto">
            <img src={foto} />
          </div>
        </Route>
        <Route path="/Carrera">
          <h1 className="titulo">Tecnologías de la Información</h1>
        </Route>
        <Route path="/Universidad">
          <h1 className="titulo">Universidad Tecnológica de Durango</h1>
        </Route>
        <Route path="/Logo">
          <div className="foto">
            <img src={logo} />
          </div>
        </Route>
        <Route path="/Carrusel">
          <Carrusel />
        </Route>
        <Route path="/Curriculum">
          <Curriculum />
        </Route>
        <Route path="/Mapa">
          <Mapa />
        </Route>
        <Route path="/Mockup">
          <Mockup />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/Logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
