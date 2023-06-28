import React, {useState, useEffect} from 'react'
import { v4 as uuid_v4 } from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

const LOCAL_STORAGE_KEY = "contacts";
function App() {
  const [contacts, setContacts] = useState([]); //child to parent through handler

  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id: uuid_v4(), ...contact}]);
  }

  const removeContactHnadler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div>
    <Header />
    <AddContact addContactHandler = {addContactHandler} />
    <ContactList contacts={contacts} getContactId = {removeContactHnadler}/>
    
    </div>
  );
}

export default App;
