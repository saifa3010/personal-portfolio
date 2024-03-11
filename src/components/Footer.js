import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon4 from '../assets/img/icons8-github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 style={{ color: 'white' }}>Saif.A</h1>         
          </Col>
          <Col size={12} sm={6}  className="text-center text-sm-end">
            <div style={{marginTop:"10px"}} className="social-icon">
            <a href="https://www.linkedin.com/in/saif-alden-mahdawi-4698071a9/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/saifa3010"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
