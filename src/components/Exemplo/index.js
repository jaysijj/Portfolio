import { Col, Container, Row } from 'react-bootstrap'
import './Exemplo.css'

const Exemplo = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={4}>
            <h1>meu nome é jaime jaysi</h1>
          </Col>
          <Col xl={4}>
            <h1>meu nome é jaime jaysi</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Exemplo
