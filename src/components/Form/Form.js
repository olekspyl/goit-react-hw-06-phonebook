import React from "react";
// import { useState } from "react";
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';
import { nameChange, numberChange, nameReset, numberReset } from "redux/slices";
import {FormEl, Label, Button, Input} from './App.styled'


export default function Form({onSubmit}) {
  const id = nanoid();
  const dispatch = useDispatch();
  const nameContact = useSelector(state => state.name);
  const numberContact = useSelector(state => state.number);


// ще один варіант рішення
//   const [form, setForm] = useState({ name: '', number: '' });
//   const handleChange = e => {    const { name, value } = e.currentTarget;    setForm(prevForm => ({ ...prevForm, [name]: value }));  };
  
  
  
  const handleChange = e => {
   const { name, value } = e.target;
    value.trim();
    switch (name) {
      case 'name':
       dispatch(nameChange(value));
        break;
      case 'number':
        dispatch(numberChange(value));
        break;
      default:
        return;
    }
  }; 

  const reset = () => {
    dispatch(nameReset(''))
    dispatch(numberReset(''))
  };

  const handleSubmit = e => {
    e.preventDefault();    
    const data = {
      id,
      name: nameContact,
      number: numberContact,
    };
    onSubmit(data);
    reset();
  };

   return (
    <FormEl onSubmit={handleSubmit}>
    <Label htmlFor={id}>
      Name
      <Input
        id={id}
        type="text"
        name="name"
        value={nameContact}
        onChange={handleChange}
        required
      />
    </Label>
    <Label htmlFor={id}>
      Phone number
      <Input
        id={id}
        type="tel"
        name="number"
        value={numberContact}
        onChange={handleChange}
        required
      />
    </Label>
     <Button type="submit">Add contact</Button>     
        </FormEl>
    ) 
};