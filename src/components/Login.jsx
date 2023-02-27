import React from "react";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";

function Login() {
  const logeado_exito = (res) => {
    console.log("LOGUEADO CON ÉXITO:", res.profileObj);
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
    <center>
      <GoogleLogin
        clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
        buttonText="INGRESAR"
        onSuccess={logeado_exito}
        onFailure={fallo_login}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </center>
  );
}
export default Login;