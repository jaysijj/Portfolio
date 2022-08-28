import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import './Project.css'

const Project = () => {
  const projects = [
    {
      title: 'Zelda instrumentos 1',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    },
    {
      title: 'Zelda instrumentos 2',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    },
    {
      title: 'Zelda instrumentos 3',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    },
    {
      title: 'Zelda instrumentos 4',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    },
    {
      title: 'Zelda instrumentos',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    },
    {
      title: 'Zelda instrumentos',
      description: 'Animações e manipulação do DOM',
      imgUrl: '/assets/img/project-img1.png'
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projetos</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Option 3</Nav.Link>
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
                <Tab.Pane eventKey="second">Segundo</Tab.Pane>
                <Tab.Pane eventKey="third">Terceiro</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src="/assets/img/color-sharp2.png"
        alt=""
        className="background-image-right"
      ></img>
    </section>
  )
}

export default Project
