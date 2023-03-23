import CV from "../img/CV.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Curriculum() {
  return (
    <>
      <h1 className="titulo">Curriculum</h1>
      <div className="foto">
        <img src={CV} />
      </div>
      <br />
    </>
  );
}

export default Curriculum;
