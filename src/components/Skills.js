// import Carousel from 'react-multi-carousel';
// import { CgCPlusPlus } from "react-icons/cg";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiPython,
  DiGit,
  DiCss3,
  DiLaravel,
  DiHtml5,
  DiBootstrap,
  DiMysql,
  DiTrello,
  DiGithub,


} from "react-icons/di";

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My programming skills, please feel free to contact me to learn more.</p>
                        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiLaravel/>
                            </Col>                            
                            <Col xs={4} md={2} className="tech-icons">
                              <DiReact />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiMysql />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiPhp />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiJavascript1 />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiPython />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiCss3 />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiHtml5 />
                            </Col>                     
                            <Col xs={4} md={2} className="tech-icons">
                              <DiBootstrap />
                            </Col>
                            
                            <Col xs={4} md={2} className="tech-icons">
                              <DiGit />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiGithub />
                            </Col>
                            <Col xs={4} md={2} className="tech-icons">
                              <DiTrello />
                            </Col>
                            
                            
                          </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )

}
