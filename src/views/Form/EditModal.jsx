import React, {useState, useEffect} from 'react';
import {Modal,Form, Container, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {modElementAction} from "../../store/list/action";

const EditModal = (props) => {
  const [formVal, setFormVal] = useState({name:'',value: '', arrayId: 0})

  useEffect(() => {
    setFormVal({name: props.columnName, value: props.columnValue, arrayId: props.arrayId})
  }, [props.columnName, props.columnValue, props.arrayId])

  const handlerOnChange = ({target: {value}}) => {
    setFormVal({...formVal, value: value})
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(formVal)
    props.modElement(formVal)
    props.onHide()
  }
  return (
    <Modal show={props.show} onHide={() => props.onHide}>
      <Form onSubmit={handlerSubmit}>
        <Modal.Header ><Modal.Title>Editar columna</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Label>{formVal.name}</Form.Label>
            {formVal.name === 'Raza' ?
              <Form.Control as={'select'} onChange={handlerOnChange} value={formVal.value}>
                <option value="Helicoptero Ruso">Helicoptero Ruso</option>
                <option value="Orco">Orco</option>
                <option value="Delfín">Delfín</option>
                <option value="Humano">Humano</option>
              </Form.Control>
            : <Form.Control type={formVal.name === 'Edad' ? 'number' : 'text'} onChange={handlerOnChange} value={formVal.value} required /> }
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
          <Button type={'submit'} variant={'warning'}>Guardar Edición</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.editModal,
    ...state.elemntList
  }
}
const mapDispatchToProps = (dispatch) => ({
  modElement: payload => dispatch(modElementAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);