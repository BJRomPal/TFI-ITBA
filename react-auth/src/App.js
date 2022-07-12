import { Container, Col, Row, Image } from "react-bootstrap";
import Register from "./Register";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div class="pantalla-registro-inicioSesion" style={{
      "margin": "5%",
      "text-align": "center",
      "display": "flex",
      "flex-direction": "row",
      "border-radius": "20px"}}>
      <Container style={{
        "height": "calc(80vh - 4vw)",
        "width": "48vw",
        "border-radius": "20px 0 0 20px",
        "background-color": "white",
        "padding": "2vw"}}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Register />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
      <div style={{
        "height": "80vh",
        "width": "50vw",
        "border-radius": "0 20px 20px 0",
        "position": "relative"}}>
        <Image src='https://relatedgroup.com/wp-content/uploads/2019/10/Related-SLS-Puerto-Madero-View3.jpg'></Image>
        <h3>Encuentra tu próximo hogar</h3>
      </div>
    </div>
  );
}

export default App;
