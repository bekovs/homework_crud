import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import { useState } from 'react';
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editModal, setEditModal] = useState(false);
  const handleEditClose = () => setEditModal(false);
  const handleEditOpen = () => setEditModal(true);

  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState({});

  const handleContact = (newContact) => {
    let newContacts = contacts.map((item) => item)
    newContacts.push(newContact);
    setContacts(newContacts);
  }

  const handleDelete = (id) => {
    let newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts);
  }

  const handleEdit = (id) => {
    let obj = contacts.filter((contact) => contact.id === id);
    handleEditOpen();
    setEditContact(obj[0]);
  };

  const handleSave = (obj) => {
    let newContacts = contacts.map((contact) => {
      if (contact.id === obj.id) {
        return obj;
      }
      return contact;
    });
    setContacts(newContacts);
    handleEditClose();
  };

  return (
    <div className="App">
      <Navbar handleOpen={handleOpen} />
      <AddContact open={open} handleClose={handleClose} handleContact={handleContact}/>
      <ContactList contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
      <EditContact editModal={editModal} handleEditClose={handleEditClose} editContact={editContact} handleSave={handleSave}/>
    </div>
  );
}

export default App;
