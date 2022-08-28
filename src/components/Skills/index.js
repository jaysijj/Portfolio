import './Skills.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Col, Container, Row } from 'react-bootstrap'

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
      slidesToSlide: 3 // optional, default to 1.
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>
                O percentual abaixo tem como objetivo indicar qual linguagem eu
                tenho mais domínio e qual mais utilizo no meu dia a dia.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src="/assets/img/meter1.svg" alt="image1"></img>
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src="/assets/img/meter2.svg" alt="image2"></img>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="/assets/img/meter3.svg" alt="image3"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="/assets/img/meter1.svg" alt="image4"></img>
                  <h5>Python</h5>
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
