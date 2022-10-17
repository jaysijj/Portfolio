import { Container, Row, Col } from 'react-bootstrap'
import './Banner.css'
import sprite from '../../assets/img/barba10.png'

const Banner = () => {
  return (
    <section className="banner" id="home">
      {/*<img src="/assets/img/banner-bg.png" alt="banner"></img> */}
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
              Engenheiro metalúrgico formado pela UFC e estudante de Análise e
              Desenvolvimento de Sistemas pela Unichristus. Migrei para a área
              de tecnologia pois sou apaixonado por desenvolvimento e inovação.
              Busco me desenvolver constantemente, completei o Bootcamp MRV
              Fullstack Developer, estou participando do Programa Desenvolve
              2022 do Grupo Boticário e sou membro do grupo de Programação
              Competitiva da Unichristus.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
