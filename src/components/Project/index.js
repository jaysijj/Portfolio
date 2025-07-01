import { Col, Container, Row, Tab } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import './Project.css'
import projectImg1 from '../../assets/img/ArquiteturaJamy.png'
import projectImg2 from '../../assets/img/actionToy.png'
import projectImg3 from '../../assets/img/ZeldaInstrument.png'
import projectImg4 from '../../assets/img/clinicaDentaria.png'
import projectImg5 from '../../assets/img/GryphGame2.png'
import projectImg6 from '../../assets/img/alocacaoAcademica.png'
import projectImg7 from '../../assets/img/nattyFit.png'
import projectImg8 from '../../assets/img/pomodoro.png'
import projectImg9 from '../../assets/img/Pokedex.png'
import projectImg10 from '../../assets/img/apiRest_odontologia.png'

const Project = () => {
  const projects = [
    {
      title: 'Clinica Odontológica',
      description: 'Sistema para cadastro de clientes e acompanhamento de consultas. Contém login, cadastro, visualização de consultas, 3 níveis de acesso e páginas personalizadas. (React, Javascript, Node)',
      imgUrl: projectImg4,
      link: 'https://github.com/jaysijj/clinica_dentaria'
    },
    {
      title: 'Programa - Alocação Acadêmica',
      description: 'Este programa foi projetado para auxiliar na seleção dos alunos mais adequados para cada projeto acadêmico em uma instituição de ensino superior. (Python, Openpyxl)',
      imgUrl: projectImg6,
      link: 'https://github.com/jaysijj/vacancy_allocations_Tkinter'
    },
    {
      title: 'API REST - JAVA e Spring Boot',
      description: ' Backend para uma aplicação de gerenciamento de usuários. Camadas Model, DTO, Repository, Service e Controller, documentação das rotas da API usando Swagger e Flyway.',
      imgUrl: projectImg10,
      link: 'https://github.com/jaysijj/apirest-clinica-odontologica'
    },
    {
      title: 'Aplicativo - NattyFit',
      description: 'O NattyFit é um aplicativo Android de saúde. Desenvolvido em Java usando Android Studio, utiliza SQLite para armazenamento local, navegação por Intents e internacionalização.',
      imgUrl: projectImg7,
      link: 'https://github.com/jaysijj/NattyFit'
    },
    {
      title: 'Site - Pokedex API',
      description: 'Desenvolvimento de uma plataforma web em ReactJS para listar, visualizar e buscar Pokémon. Utilização da API REST PokéApi para obter todos os dados necessários.',
      imgUrl: projectImg9,
      link: 'https://github.com/jaysijj/pokedex-api'
    },
    {
    title: 'Aplicativo - Pomodoro',
    description:
      'Um aplicativo projetado à técnica do Pomodoro, feito em React Native e TypeScript. Com interface intuitiva que permite iniciar/pausar o temporizador e destaque de cores para o modo de foco e pausa.',
    imgUrl: projectImg8,
    link: 'https://github.com/jaysijj/Pomodoro/'
    },
    {
      title: 'Site - Arquitetura',
      description: 'Criação de um site sem uso de bibliotecas',
      imgUrl: projectImg1,
      link: 'https://jaysijj.github.io/site-arquitetura/'
    },
    {
      title: 'Site - Carrinho de E-commerce',
      description:
        'Loja virtual que disponibiliza um carrinho para armazenar produtos e efetuar compras',
      imgUrl: projectImg2,
      link: 'https://action-toy.vercel.app/'
    },
    {
      title: 'Web - Zelda instrumentos',
      description:
        'Animações e manipulação do DOM. Pressione os botões para tocar notas musicais.',
      imgUrl: projectImg3,
      link: 'https://jaysijj.github.io/zelda_instrument/'
    },
    {
      title: 'GryphGame',
      description: 'Jogo feito em JS',
      imgUrl: projectImg5,
      link: 'https://jaysijj.github.io/Gryph-game/'
    },
  ]
  const projectsTwo = [
    {
      title: 'GryphGame',
      description: 'Jogo feito em JS',
      imgUrl: projectImg5,
      link: 'https://jaysijj.github.io/Gryph-game/'
    },
    {
      title: 'Formulário Cadastro',
      description: 'Filtra os dados e separa em um objeto',
      imgUrl: projectImg4,
      link: 'https://jaysijj.github.io/Formulario_cadastro/'
    },
  ]

  return (
    <section className="project" id="project" data-aos="fade-right">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projetos</h2>
            <p>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Projetos 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projetos 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Projetos 3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsTwo.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
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
