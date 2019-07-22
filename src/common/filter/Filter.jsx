import React, {useState} from 'react';
import {InputGroup, DropdownButton, DropdownItem, FormControl} from "react-bootstrap";


const Filter = (props) => {

  const [filter, setFilter] = useState({key: '', text: ''})

  const handleClick = ({target:{name}}) => {
    if (filter.text.length) {
      setFilter({...filter, key: name})
      props.history.push(`/filter/${name}/${filter.text}`)
    } else window.alert('No hay texto para filtrar')
  }
  return (
    <InputGroup className='mb-3'>
      <FormControl name={'text'} value={filter.text} onChange={({target:{value}}) => setFilter({...filter, text: value})}/>
      <InputGroup.Append>
        <DropdownButton
          title={'Filtro'}
        >
          <DropdownItem name={'name'} onClick={handleClick}>Nombre</DropdownItem>
          <DropdownItem name={'lastname'} onClick={handleClick}> Apellido</DropdownItem>
          <DropdownItem name={'Edad'} onClick={handleClick}>Edad</DropdownItem>
          <DropdownItem name={'Raza'} onClick={handleClick}>Raza</DropdownItem>
          <DropdownItem name={'Apodo'} onClick={handleClick}>Apodo</DropdownItem>
        </DropdownButton>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Filter;