import { Container } from "react-bootstrap";
import mockup from "../img/ejemplo.png";

function Mockup() {
  return (
    <>
      <Container>
        <h1 className="titulo">Mockup</h1>
        <img src={mockup} />
      </Container>
    </>
  );
}

export default Mockup;
