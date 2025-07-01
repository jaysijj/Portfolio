import { Container, Row, Col } from 'react-bootstrap'
import './Banner.css'
import sprite from '../../assets/img/barba10.png'

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col className="jay" xs={12} md={6} xl={5}>
            <img src={sprite} alt=""></img>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem-vindo ao meu Portfólio</span>
            <h1>
              <span>
                <span className="wrap">Oi! Eu me chamo Jaime</span>
              </span>
            </h1>
            <p>
            Atuo como Desenvolvedor Full-Stack desde dezembro de 2021, direciono meu foco de desenvolvimento em tecnologias
como JavaScript, Python, React, TypeScript, Django, NodeJS, HTML, CSS dentre outras que uso para criar aplicações
web/mobile de código limpo, escalável e bem documentado. Tenho familiaridade com metodologias ágeis e trabalho
em equipes multidisciplinares. Tenho conhecimentos avançados em inglês e sou capaz de me comunicar no idioma.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
