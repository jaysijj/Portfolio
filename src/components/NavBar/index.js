import './NavBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import navIcon1 from '../../assets/img/nav-icon1.png'
import navIcon2 from '../../assets/img/nav-icon2.png'
import navIcon3 from '../../assets/img/nav-icon3.png'
import curriculo from '../../assets/pdf/Currículo-JaimeJaysi.pdf'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className={scrolled ? 'scrolled' : ''}>Jaime Jaysi</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="olar">
          <Nav className="ms-auto bar2">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
              id={scrolled ? 'scrolled' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
              id={scrolled ? 'scrolled' : ''}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href="#qualification"
              className={
                activeLink === 'qualification'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('qualification')}
              id={scrolled ? 'scrolled' : ''}
            >
              Trajetória
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === 'project' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('project')}
              id={scrolled ? 'scrolled' : ''}
            >
              Projetos
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/jaysijj"
                className={scrolled ? 'scrolled' : ''}
              >
                <img
                  src={navIcon1}
                  alt="github"
                  className={scrolled ? 'scrolled' : ''}
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/jaime-jaysi/"
                className={scrolled ? 'scrolled' : ''}
              >
                <img
                  src={navIcon2}
                  alt="linkedin"
                  className={scrolled ? 'scrolled' : ''}
                ></img>
              </a>
              <a
                href="mailto:jaimejaysi@gmail.com"
                className={scrolled ? 'scrolled' : ''}
              >
                <img
                  src={navIcon3}
                  alt="mail"
                  className={scrolled ? 'scrolled' : ''}
                ></img>
              </a>
            </div>
            <a
              className="curriculo"
              href={curriculo}
              alt="currículo em pdf"
              download="Curriculo_JaimeJaysi"
            >
              <button
                id={scrolled ? 'scrolled' : ''}
                className="vvd"
                onClick={() => {
                  console.log('Clicou')
                }}
              >
                <span>Baixe meu currículo</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
