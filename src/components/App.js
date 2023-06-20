import React from 'react'
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: 1,
      name: "Rishabh",
      email: "rishabh@gmail.com"
    },
    {
      id: 2,
      name: "Sinha",
      email: "sinha@gmail.com"
    },
    {
      id: 3,
      name: "Om",
      email: "om@gmail.com"
    }
  ];
  return (
    // <div>Hello World</div>
    <>
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>
    
    </>
  );
}

export default App;
