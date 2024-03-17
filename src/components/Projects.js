import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/GHS.PNG";
import projImg2 from "../assets/img/multi-vendor-platforms.jpg";
import projImg3 from "../assets/img/laravel.PNG";
import projImg4 from "../assets/img/react game.PNG";
import projImg5 from "../assets/img/porti react.PNG";
import projImg6 from "../assets/img/attend.PNG";
import projImg7 from "../assets/img/htmlCss.PNG";
import projImg8 from "../assets/img/porti css.PNG";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsLaravel = [
    {
      title: "Laravel project",
      description: "Home services website",
      imgUrl: projImg1,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/GHS" target="_blank"> show <ArrowRightCircle size={25} /></a>
      
    },
    {
      title: "Laravel project",
      description: "Multi-vendor store",
      imgUrl: projImg2,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/VagaStore" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },
    {
      title: "Laravel project",
      description: "Online store",
      imgUrl: projImg3,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/heinstore" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },
 
  ];

  const projectsReact = [
    {
      title: "React Project",
      description: "Electronic games exhibition",
      imgUrl: projImg4,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/Gaming-react-project-" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },
    {
      title: "React Project",
      description: "Business portfolio",
      imgUrl: projImg5,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/Portfolio_PHP" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },

 
  ];
  const projectsCssJs = [
    {
      title: "Js Project",
      description: "Student tracking platform",
      imgUrl: projImg6,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/Attendance-Tracker-System-group6" target="_blank"> show <ArrowRightCircle size={25} /></a>

    },
    {
      title: "Css and Html Project",
      description: "Pet exhibition",
      imgUrl: projImg7,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/pets" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },
    {
      title: "Css and Html Project",
      description: "Business portfolio",
      imgUrl: projImg8,
      tag: <a style={{cursor:"pointer",textDecoration:"none",color:"white",}}
      href="https://github.com/saifa3010/pets" target="_blank"> show <ArrowRightCircle size={25} /></a>
    },

 
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Many and varied projects have been created for Marathi Paste and this list of projects is still being updated continuously.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Projects using Laravel.</p>

                      <Row>
                        {
                          projectsLaravel.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Projects using React Js.</p>

                    <Row>
                      {
                        projectsReact.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Projects using Js,Css and Html .</p>

                    <Row>
                      {
                        projectsCssJs.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>                   
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
