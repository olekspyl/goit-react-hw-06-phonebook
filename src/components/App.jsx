import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';
import { Title, TitleContacts, TitleFind, WrapToFind } from './Form/App.styled'
import { addContact, deleteContact, filterChange } from 'redux/actions';



export default function App() {
  // const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? []});
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const formFilterChange = e => 
    // setFilter(e.target.value);
    dispatch(filterChange(e));

  const getVisibleContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const deleteItem = (id) => {
    dispatch(deleteContact(id))
  };
  // const deleteContact = id => {
  //     setContacts(prevState => prevState.filter(contact => contact.id !== id));
  //   dispatch(formFilterChange(e.target.value))
  // };
  

  const addData = data => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()))
    { alert(`Contact ${data.name} ia already in phonebook`) }
    else {
      dispatch(addContact(data));
    };
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <Form onSubmit={addData} />
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter formFilterChange={formFilterChange} filter={filter} />
      </WrapToFind>
      <Contacts contacts={getVisibleContacts()} onDelete={deleteItem} />
    </div>
  );
};
