import React from 'react';
import Contact from './Contact'

const ContactList = ({contacts, handleDelete, handleEdit}) => {
  return (  
    <div className='contacts-container'>
      {
        contacts.map((contact) => {
          return <Contact contact={contact} handleDelete={handleDelete} handleEdit={handleEdit} key={contact.id}/>
        })
      }
    </div>
  );
};

export default ContactList;