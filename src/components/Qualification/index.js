import { Col, Container, Row } from 'react-bootstrap'
import './Qualification.css'
import 'remixicon/fonts/remixicon.css'
import shapeCircle from '../../assets/img/desert.png'

const Qualification = () => {
  return (
    <section id="qualification" className="qualification section" data-aos="fade-right">
      <h2 className="section__title">Trajetória pessoal</h2>
      <span className="section__subtitle">Formação & Experiência</span>
      <Container className="container_father">
        <Row className="qualification__container container grid section__border aligh-items-center justify-content-md-center">
          <Col xs={12} md={5} xl={5} className="qualification__content">
            <h3 className='qualification__title'>
              <i class="ri-pencil-ruler-2-line experiencia_profissional"></i>Experiência profissional
            </h3>
            <div className="qualification__info">
            <div>
                <h3 className="qualification__name">
                  Estágio na Assembleia Legislativa do Estado do Ceará
                </h3>
                <span className="qualification__country">ALECE</span>
                <span className="qualification__year">
                  Março 2024 - Março 2025
                </span>
                <span className="qualification__comment">
                  Responsável por criar uma aplicação WEB para impressão de certidões de vínculo funcional da ALECE (ReactJS, JavaScript, Node.JS). 
                </span>
                <span className="qualification__comment__sep">
                  Auxiliar na demandas de novas aplicações em Laravel + Blade, PHP Legado, ReactJS + Node.JS.
                </span>
              </div>
            <div>
                <h3 className="qualification__name">
                  Estágio na Coordenadoria de Sistemas de Informação do Instituto Federal do Ceará
                </h3>
                <span className="qualification__country">IFCE</span>
                <span className="qualification__year">
                  Novembro 2023 - Março 2024
                </span>
                <span className="qualification__comment">
                  Responsável por auxiliar nas demandas de desenvolvimento dos sistemas internos em Django, Python, Html, CSS e Docker.
                </span>
                <span className="qualification__comment__sep">
                  Fiz manutenção, codereview e implementação de novas funcionalidades nos sistemas internos.
                </span>
              </div>
              <div>
                <h3 className="qualification__name">
                  Técnico de Gestão de Dados
                </h3>
                <span className="qualification__country">Supermercado Araripe</span>
                <span className="qualification__year">
                  Abril 2023 - Novembro 2023
                </span>
                <span className="qualification__comment">
                  Responsável por gerenciar informações relacionadas às operações do supermercado, incluindo dados de vendas,
                  estoque, compras, clientes, entre outros. Como principal resultado, consegui solucionar problemas de carga de preços que estavam impactando
                  negativamente os pontos de venda (PDV), melhorei a precisão e a consistência das informações nos pontos
                  de venda, resultando em satisfação dos clientes e melhoria geral no desempenho dos PDVs do
                  supermercado.
                </span>
              </div>
            </div>

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
              <i class="ri-book-read-line"></i>Treinamentos
            </h2>
            <div className="qualification__info">
            <div>
                <h3 className="qualification__name">
                  Mandacaru.dev - capacitação em Data Science
                </h3>
                <span className="qualification__country">Em parceria com a UFC</span>
                <span className="qualification__year">
                  Outubro 2023 - Dezembro 2023
                </span>
                <span className="qualification__comment">
                Fui selecionado para participar do projeto Mandacaru.dev, uma iniciativa da B3 em parceria com a Universidade Federal do Ceará. 
                Obtive conhecimentos sobre Data Science & Big Data, Extração, Preparação, Interpretação, Visualização e Transformação de dados, Técnicas para mineração de dados e Aprendizagem de máquina.
                </span>
              </div>
              <div>
                <h3 className="qualification__name">
                  Grupo de Estudo de Programação Competitiva
                </h3>
                <span className="qualification__country">Unichristus</span>
                <span className="qualification__year">
                  Setembro 2022 - Setembro de 2023
                </span>
                <span className="qualification__comment">
                É um Grupo de Treinamento de Competições de Programação em Python, envolvendo competições internas e
                resoluções de problemas de marotonas de programação utilizando "Beecrowd". Para concluir as maratonas é necessário desenvolver soluções eficientes, demonstrando capacidade de análise, raciocínio lógico e
                habilidades algorítmicas para resolução de problemas de programação.
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
