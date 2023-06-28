import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id)=>{
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard contacts={contact} clickHandler={deleteContactHandler} key={contact.id}/>
      </div>
    );
  });
  return (
    <div>
      <div className='card mx-4 mt-4 mb-4'>
        <div className='card-header'>
          <b> Contact List</b>
        </div>
        {/* <div class="row"></div> */}
        <div className="row mt-4 mx-4">{renderContactList}</div>
      </div>
    </div>

  )
}

export default ContactList