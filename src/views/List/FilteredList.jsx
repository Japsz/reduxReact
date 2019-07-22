import React, {useState} from 'react';
import {connect} from 'react-redux';
import EditModal from "./../Form/EditModal";

import {Col, Row, Card, ListGroup, ListGroupItem, Button, Container} from "react-bootstrap";
import {delElementAction} from "../../store/list/action";
import {setEditModal} from "../../store/editForm/action";
import Filter from "../../common/filter/Filter";

const FilteredList = (props) => {
  const [editModalShow, setEditModalShow] = useState(false)
  const [hasMatches, setHasMatches] = useState(false)

  const handleDelete = ({target: {value}}) => {
    props.delElement(value)
  }
  const handleEditModalShow = ({target: {value, name, id}}) => {
    props.setEditModal({name, value, id})
    setEditModalShow(true)
  }

  const {elemntList} = props
  const {key, text} = props.match.params

  return (
    <Container>
      <Row style={{marginBottom: '10px'}}>
        <Col md={12}>
          <h2 style={{margin: '3px'}}>Resultados de Filtro</h2>
        </Col>
        <Col md={{span: 3}}>
          <Filter {...props}/>
        </Col>
      </Row>
      <Row>

        {
          elemntList.map((item, idxElement) => {
            if (new RegExp(text,'i').exec(item[key])) {
              if (!hasMatches) setHasMatches(true);
              return (
                <Col xl={4} md={6} sm={12} key={idxElement} style={{padding: '5px'}} className='float-right'>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.name} {item.lastname} <Button variant={'danger'} className={'float-right'} value={idxElement} onClick={handleDelete}>Quitar</Button></Card.Title>
                    </Card.Body>
                    <ListGroup variant={'flush'}>
                      <ListGroupItem><strong>Edad: </strong> {item.Edad}<Button variant={'warning'} className={'float-right'} name={`Edad`} value={item.Edad} id={idxElement} onClick={handleEditModalShow}>Editar</Button></ListGroupItem>
                      <ListGroupItem><strong>Raza: </strong> {item.Raza}<Button variant={'warning'} className={'float-right'} name={`Raza`} value={item.Raza} id={idxElement} onClick={handleEditModalShow}>Editar</Button></ListGroupItem>
                      <ListGroupItem><strong>Apodo: </strong> {item.Apodo}<Button variant={'warning'} className={'float-right'} name={`Apodo`} value={item.Apodo} id={idxElement} onClick={handleEditModalShow}>Editar</Button></ListGroupItem>

                    </ListGroup>
                  </Card>
                </Col>
              );
            } else return(null)
          })
        }
        { !hasMatches ? <Col md={12}><Card><Card.Body><Card.Title>No hay nada que mostrar</Card.Title></Card.Body></Card></Col> : null }
      </Row>
      <EditModal show={editModalShow} onHide={() => setEditModalShow(false)}/>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ...state.elementList
  }
}
const mapDispatchToProps = (dispatch) => ({
  delElement: payload => dispatch(delElementAction(payload)),
  setEditModal: payload => dispatch(setEditModal(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(FilteredList);