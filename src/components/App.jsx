import React from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { Title, TitleContacts, TitleFind, WrapToFind } from './App.styled'


export default function App() {
  return (
    <div>
      <Title>Phonebook</Title>
      <Form/>
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter/>
      </WrapToFind>
      <Contacts/>
    </div>
  );
};
