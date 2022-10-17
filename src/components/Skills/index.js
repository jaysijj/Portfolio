import './Skills.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Col, Container, Row } from 'react-bootstrap'
// import graf90 from '../../assets/img/graf90lar.png'
//import graf85 from '../../assets/img/graf85lar.png'
// import graf80 from '../../assets/img/graf80lar.png'
// import graf75 from '../../assets/img/graf75lar.png'
// import graf50 from '../../assets/img/graf50lar.png'
// import graf20 from '../../assets/img/graf20lar.png'
import scriptJava from '../../assets/img/script-java.png'
import react from '../../assets/img/react.png'
import html from '../../assets/img/html.png'
import css3 from '../../assets/img/css-3.png'
import python from '../../assets/img/python.png'
import mysql from '../../assets/img/mysql.png'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx" id="skills">
              <h2>Habilidades</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={scriptJava} alt="image1"></img>
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="image2"></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={html} alt="image3"></img>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="image4"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={python} alt="image4"></img>
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="image4"></img>
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src="/assets/img/color-sharp.png"
        alt=""
      ></img>
    </section>
  )
}

export default Skills
