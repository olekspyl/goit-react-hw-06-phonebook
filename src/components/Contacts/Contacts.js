import React from "react";
import { useDispatch,  useSelector } from "react-redux";  
import { getContacts, getFilter } from "redux/selector";
import {deleteContact} from "redux/slices";
import {ListItem, DeleteButton} from '../App.styled'



const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    
    const getVisibleContacts = () => {
        if (!contacts) {
            return;
        }
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        
    };
    
    return (
        <>
            {contacts.length === 0 && <p>Sorry, but you don't have any contacts</p>}
           <ul>
            {getVisibleContacts().map(({id, name, number}) => {
                return (
                    <ListItem key={id}>{name} {number}
                        <DeleteButton onClick={() =>  dispatch(deleteContact({id}))}>Delete</DeleteButton>
                    </ListItem>
                )
            })}
            </ul>
        </>
    );
};

export default Contacts;




  

