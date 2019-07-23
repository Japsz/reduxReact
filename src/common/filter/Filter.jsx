import React, {useState} from 'react';
import {InputGroup, DropdownButton, DropdownItem, FormControl, Form, Badge, Button, Navbar, Nav} from "react-bootstrap";
import {connect} from "react-redux";
import {delTag,addTag} from "../../store/filterList/action";
import {Link} from "react-router-dom";


const Filter = (props) => {

  const [filter, setFilter] = useState({key: '', text: ''})

  const handleClick = ({target:{name}}) => {
    if (filter.text.length) {
      setFilter({...filter, key: name})
      props.addTag({...filter, key: name})
    } else window.alert('No hay texto para filtrar')
  }

  const handleDelClick = ({target:{value}}) => {
    props.delTag(value)
  }
  const {tagList} = props
  return (
      <Navbar bg={'light'} expand={'sm'}>
        <Navbar.Brand><h2 style={{margin: '3px'}}> Todas las personas <Link className={'btn btn-success'} to={'/addElement'}>+ Añadir</Link></h2></Navbar.Brand>
        <Navbar.Collapse>
          <Form inline onSubmit={() => false}>
            <FormControl name={'text'} value={filter.text} onChange={({target:{value}}) => setFilter({...filter, text: value})}/>
            <DropdownButton
              as={InputGroup.Append}
              title={'Filtro'}
            >
              <DropdownItem name={'name'} onClick={handleClick}>Nombre</DropdownItem>
              <DropdownItem name={'lastname'} onClick={handleClick}> Apellido</DropdownItem>
              <DropdownItem name={'Edad'} onClick={handleClick}>Edad</DropdownItem>
              <DropdownItem name={'Raza'} onClick={handleClick}>Raza</DropdownItem>
              <DropdownItem name={'Apodo'} onClick={handleClick}>Apodo</DropdownItem>
            </DropdownButton>
          </Form>
          <Nav className={'mr-auto'} style={{marginLeft: '5px'}}>
            <Nav.Item>
              <strong>Filtros: </strong>
              {
                tagList.map((item,idx) => {
                  return(<Badge key={idx} variant={'primary'} style={{margin: '6px'}}>{item.key}: {item.text} <Button type={'button'} variant={'danger'} value={idx} size={'sm'} onClick={handleDelClick}>X</Button></Badge>)
                })
              }
              {tagList.length === 0 ? <small>No hay filtros aplicados</small> : null}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};
const mapStateToProps = (state) =>{
  return {
    ...state.tagList
  }
}
const mapDispatchToProps = dispatch => ({
  addTag: payload => dispatch(addTag(payload)),
  delTag: payload => dispatch(delTag(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Filter);