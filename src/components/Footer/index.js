import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../../assets/img/nav-icon1.png'
import navIcon2 from '../../assets/img/nav-icon2.png'
import navIcon3 from '../../assets/img/nav-icon3.png'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center itemsFooter">
          <Col>
            <h1>Jaime Jaysi</h1>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/jaysijj">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/jaime-jaysi/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="jaimejaysi@gmail.com">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
