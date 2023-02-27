import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Alumno from "../pages/Alumno";
import Mockup from "../pages/Mockup";
import Inicio from "../pages/Inicio";
import Mapa from "./Mapa";
import Logout from "../pages/Logout";

function Home() {
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
          <Link to="/Mockup" className="btn btn-dark">
            MOCKUP
          </Link>
          <Link to="/Login" className="btn btn-dark">
            LOGIN
          </Link>
          <Link to="/Logout" className="btn btn-dark">
            LOGOUT
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
          <Route path="/Mockup">
            <Mockup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
