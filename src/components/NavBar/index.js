import './NavBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const NavBar = () => {
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

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <h1>Jaime Jaysi</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="home">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="habilidades">
              Habilidades
            </Nav.Link>
            <Nav.Link href="#" className="projetos">
              Projetos
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/jaysijj">
                <img src="/assets/img/nav-icon1.png" alt="github"></img>
              </a>
              <a href="https://www.linkedin.com/in/jaime-jaysi/">
                <img src="/assets/img/nav-icon2.png" alt="linkedin"></img>
              </a>
              <a href="jaimejaysi@gmail.com">
                <img src="/assets/img/nav-icon3.png" alt="mail"></img>
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                console.log('Clicou')
              }}
            >
              <span>Clique aqui</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
