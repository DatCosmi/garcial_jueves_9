import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

function LoginPage() {
  return (
    <form>
      <h2>Bienvenido!</h2>
      <fieldset>
        <legend>Inicio de Sesión</legend>
        <ul>
          <li>
            <label for="username">Correo:</label>
            <input type="text" id="username" required />
          </li>
          <li>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required />
          </li>
          <li>
            <i />
            <a onClick={() => this.changeView("PWReset")} href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </li>
        </ul>
      </fieldset>
      <button className="btn" type="button">
        Ingresar
      </button>
      <div className="btns-container">
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#ff2d69" }}
        >
          <MDBIcon className="icon" fab icon="google" size="sm" />
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#ff2d69" }}
        >
          <MDBIcon className="icon" fab icon="facebook" size="sm" />
        </MDBBtn>
        <button className="btn" type="button">
          Crear una Cuenta
        </button>
      </div>
    </form>
  );
}

export default LoginPage;
