import FacebookLogin from "react-facebook-login";
import Swal from "sweetalert2";

function LoginFace() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
      icon: "success",
      title: "UTD Durango",
      text: "Logueado con éxito",
    });
  };

  return (
    <FacebookLogin
      appId="2355119751312772"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default LoginFace;
