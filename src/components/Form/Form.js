import React from "react";
import {useDispatch, useSelector } from "react-redux"; 
import { nanoid } from 'nanoid'
import { FormEl, Label, Button, Input } from '../App.styled'
import { addContact } from "redux/slices";
import { getContacts } from "redux/selector";


export default function Form() {
  const id = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();   
    const data = {
      id: id,
      name: e.target.name.value.trim(),
      number: e.target.number.value.trim(),
    };

    if (contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()))
    { alert(`Contact ${data.name} ia already in phonebook`) }
    else {
      dispatch(addContact(data));
          // return contacts; 
    }
     e.target.reset();

  };


   return (
    <FormEl onSubmit={handleSubmit}>
    <Label htmlFor="name">
      Name
      <Input
        id={id}
        type="text"
        name="name"
        required
      />
    </Label>
    <Label htmlFor="number">
      Phone number
      <Input
        id={id}
        type="tel"
        name="number"
        required
      />
    </Label>
     <Button type="submit" >Add contact</Button>     
        </FormEl>
    ) 
};