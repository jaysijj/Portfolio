import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import './Project.css'
import projectImg1 from '../../assets/img/ArquiteturaJamy.png'
import projectImg2 from '../../assets/img/actionToy.png'
import projectImg3 from '../../assets/img/ZeldaInstrument.png'
import projectImg4 from '../../assets/img/formulario-cadastro.png'
import projectImg5 from '../../assets/img/GryphGame2.png'

const Project = () => {
  const projects = [
    {
      title: 'Site Arquitetura',
      description: 'Criação de um site sem uso de bibliotecas',
      imgUrl: projectImg1,
      link: 'https://jaysijj.github.io/site-arquitetura/'
    },
    {
      title: 'Carrinho de E-commerce',
      description:
        'Loja virtual que disponibiliza um carrinho para armazenar produtos e efetuar compras',
      imgUrl: projectImg2,
      link: 'https://action-toy.vercel.app/'
    },
    {
      title: 'Zelda instrumentos',
      description:
        'Animações e manipulação do DOM. Pressione os botões para tocar notas musicais.',
      imgUrl: projectImg3,
      link: 'https://jaysijj.github.io/zelda_instrument/'
    },
    {
      title: 'Formulário Cadastro',
      description: 'Filtra os dados e separa em um objeto',
      imgUrl: projectImg4,
      link: 'https://jaysijj.github.io/Formulario_cadastro/'
    },
    {
      title: 'GryphGame',
      description: 'Jogo feito em JS',
      imgUrl: projectImg5,
      link: 'https://jaysijj.github.io/Gryph-game/'
    }
    // ,
    // {
    //   title: 'Zelda instrumentos',
    //   description: 'Animações e manipulação do DOM',
    //   imgUrl: projectImg3,
    //   link: 'https://jaysijj.github.io/zelda_instrument/'
    // }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projetos</h2>
            <p>
              Estou seguindo o plano de estudo do grupo boticário na Alura, onde
              tenho consolidado alguns conhecimentos em JS, HTML, CSS, React,
              MySQL, Node.JS e venho aplicando esse aprendizado diariamente com
              novos projetos.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Projetos 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projetos 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Projetos 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project
