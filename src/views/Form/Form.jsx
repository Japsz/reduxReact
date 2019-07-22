import React, {useState} from 'react';
import {connect} from "react-redux";
import {addElementAction} from "../../store/list/action";
import {Container, Form, Button} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";


const ElementForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    Edad: '',
    Raza: 'Helicoptero Ruso',
    Apodo: ''
  })
  const handlerOnChange = ({target: {value, name}}) => {
    setForm({
      ...form,
      [name]: value
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
  };
  const [redirect, useRedirect] = useState(false)
  const handleRedirect = (redireccionar) => {
    redireccionar(true)
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    props.setTodoListComponent({...form})
    handleRedirect(useRedirect)
  }
  if (redirect) {
    return(<Redirect to={'/'}/>)
  } else {
    return (
      <Container>
        <Form onSubmit={handlerSubmit}>
          <h2 style={{marginBottom: '10px'}}> + Añade personas</h2>
          <Form.Group>
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type="text" className={'form-control'} onChange={handlerOnChange} name={'name'}
                          value={form.name} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type="text" className={'form-control'} onChange={handlerOnChange} name={'lastname'}
                          value={form.lastname} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Apodo: </Form.Label>
            <Form.Control type="text" className={'form-control'} onChange={handlerOnChange} name={'Apodo'}
                          value={form.Apodo} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Raza: </Form.Label>
            <Form.Control as={'select'} onChange={handlerOnChange} name={'Raza'} value={form.Raza}>
              <option value="Helicoptero Ruso" selected>Helicpotero Ruso</option>
              <option value="Orco">Orco</option>
              <option value="Delfín">Delfín</option>
              <option value="Humano">Humano</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad: </Form.Label>
            <Form.Control type="number" className={'form-control'} onChange={handlerOnChange} name={'Edad'}
                          value={form.Edad} required/>
          </Form.Group>
          <Form.Group>
            <Button type={'submit'} variant={'primary'}>Submit</Button>
            <Link to={'/'}><Button variant={'default'}>Volver</Button></Link>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTodoListComponent: payload => dispatch(addElementAction(payload))
})

export default connect(null, mapDispatchToProps)(ElementForm);