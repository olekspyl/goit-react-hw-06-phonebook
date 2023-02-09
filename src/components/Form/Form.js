import React from "react";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux"; 
import { nanoid } from 'nanoid'
import { FormEl, Label, Button, Input } from '../App.styled'
import { addContact } from "redux/slices";
import { getContacts } from "redux/selector";


export default function Form() {
  const [form, setForm] = useState({ name: '', number: '' });
  const id = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    console.log(e)
  };

  const reset = () => {
    setForm('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements.login.value;
    
    const initData = {
      id,
      name: form.name,
      number: form.number,
    };

    if (contacts.find(contact => contact.name === initData.name)) {
      return alert(`Contact ${initData.name} ia already in phonebook`);
    }

    dispatch(addContact(initData));
    reset();
  };

   return (
    <FormEl onSubmit={handleSubmit}>
    <Label htmlFor="name">
      Name
      <Input
        id={id}
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
    </Label>
    <Label htmlFor="number">
      Phone number
      <Input
        id={id}
        type="tel"
        name="number"
        value={form.number}
        onChange={handleChange}
        required
      />
    </Label>
     <Button type="submit">Add contact</Button>     
        </FormEl>
    ) 
};