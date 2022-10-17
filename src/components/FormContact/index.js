import { Container, Row, Col, Form } from 'react-bootstrap'
import './FormContact.css'
import mobBro from '../../assets/img/Get in touch-bro.svg'
import { useState } from 'react'
import { Button } from 'bootstrap'

const FormContact = () => {
  const forminitialDetail = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  
  const handleSubmit = () => {
    e.preventDefault()
    setButtonText('Sending...')
    let responde = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    })
    setButtonText("Send")
    let result = response.json()
    setFormDetails(forminitiaDetails)
    if (result.code === 200){
      setStatus({ sucess: true, message: 'Mensagem foi enviada com sucesso'})
    } else {
      setStatus({ sucess: false, message: 'Mensagem não foi enviado, por favor tente novamente depois'})
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="aligh-items-center">
          <Col>
            <img src={mobBro} alt="" />
          </Col>
          <Col>
            <h1>Fale comigo</h1>
            <Form onSubmit={handleSubmit}>
              <Row className="aligh-items-center">
                <Col>
                  <input
                    type="text"
                    placeholder="Primeiro nome"
                    value={formDetails.firstName}
                    onChange={e => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    value={formDetails.lastName}
                    onChange={e => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={formDetails.email}
                    onChange={e => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col>
                  <input
                    type="tel"
                    placeholder="Telefone"
                    value={formDetails.phone}
                    onChange={e => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={e => onFormUpdate('mensagem', e.target.value)}
                  />
                  <Button type="submit">
                    <span>{buttonText}</span>
                  </Button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.sucess === false ? 'danger' : 'sucess'}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FormContact
