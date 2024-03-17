import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,tag }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{height:"200px"}} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h5>{tag}</h5>
        </div>
      </div>
    </Col>
  )
}
