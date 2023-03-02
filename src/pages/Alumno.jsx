import { Container } from "react-bootstrap";
import CV from "../img/CV.png";

function Alumno() {
  return (
    <>
      <Container>
        <h1 className="titulo">Carlos Iván García López</h1>
        <div className="foto">
          <img src={CV} />
        </div>
      </Container>
    </>
  );
}

export default Alumno;
