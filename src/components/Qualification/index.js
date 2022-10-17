import { Col, Container, Row } from 'react-bootstrap'
import './Qualification.css'
import 'remixicon/fonts/remixicon.css'
import shapeCircle from '../../assets/img/desert.png'

const Qualification = () => {
  return (
    <section id="qualification" className="qualification section">
      <h2 className="section__title">Trajetória pessoal</h2>
      <span className="section__subtitle">Formação & Experiência</span>
      <Container className="container_father">
        <Row className="qualification__container container grid section__border aligh-items-center justify-content-md-center">
          <Col xs={12} md={5} xl={5} className="qualification__content">
            <h3 className="qualification__title">
              <i class="ri-pencil-ruler-2-line"></i>Formação
            </h3>
            <div className="qualification__info">
              <div>
                <h3 className="qualification__name">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <span className="qualification__country">Unichristus</span>
                <span className="qualification__year formation__year">
                  2022-2024
                </span>
              </div>
              <div>
                <h3 className="qualification__name">Engenharia Metalúrgica</h3>
                <span className="qualification__country">
                  Universidade Federal do Ceará
                </span>
                <span className="qualification__year formation__year">
                  2009-2016
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5} className="qualification__content">
            <h2 className="qualification__title">
              <i class="ri-book-read-line"></i>Experiência
            </h2>
            <div className="qualification__info">
              <div>
                <h3 className="qualification__name">
                  Grupo de Estudo de Programação Competitiva
                </h3>
                <span className="qualification__country">Unichristus</span>
                <span className="qualification__year">
                  Setembro 2022 - atualmente
                </span>
                <span className="qualification__comment">
                  Grupo de estudo com foco em programação para competições. A
                  linguagem principal utilizada nos encontros é Python.
                </span>
              </div>
              <div>
                <h3 className="qualification__name">
                  Programa Desenvolve Boticário
                </h3>
                <span className="qualification__country">Alura</span>
                <span className="qualification__year">
                  Janeiro 2022 - Outubro 2022
                </span>
                <span className="qualification__comment">
                  Formação FullStack, aprendendo lógica de programação,
                  javascript, Flutter, HTML/CSS, Node.js, Git, Github, entre
                  outros.
                </span>
              </div>
              <div>
                <h3 className="qualification__name">MRV Fullstack Developer</h3>
                <span className="qualification__country">
                  Digital Inovation One
                </span>
                <span className="qualification__year">
                  Dezembro 2021 - Março 2022
                </span>
                <span className="qualification__comment">
                  Bootcamp de programação Full-Stack. Abordou temas como HTML5,
                  CSS e linguagem JavaScript. Também foi ensinado a linguagem C#
                  e framework .NET.
                </span>
              </div>
            </div>
          </Col>
          {/* <Col className="qualificationCol">
            <h1>Qualificações</h1>
            <p>Minha qualificações estão inclusas</p>
          </Col> */}
        </Row>
      </Container>
      <img src={shapeCircle} alt="" className="qualification__img"></img>
    </section>
  )
}

export default Qualification
