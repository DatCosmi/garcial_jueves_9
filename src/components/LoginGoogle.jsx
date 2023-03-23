import React from "react";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";

function LoginGoogle() {
  const keyLogin =
    "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: keyLogin,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const logeado_exito = (respuestaExitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuestaExitosa.profileObj);
    setUser(respuestaExitosa.profileObj);
    Swal.fire({
      icon: "success",
      title: "UTD Durango",
      text: "Logueado con éxito",
    });
  };
  const fallo_login = (res) => {
    console.log("FALLO EN EL ACCESO:", res.profileObj);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Intenta de nuevo",
    });
  };

  return (
    <GoogleLogin
      clientId={keyLogin}
      onSuccess={logeado_exito}
      onFailure={fallo_login}
      buttonText="Login with Google"
      cookiePolicy={"single_host_origin"}
    />
  );
}
export default LoginGoogle;
