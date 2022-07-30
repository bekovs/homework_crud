import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [contacts, setContacts] = useState([]);


  return (
    <div className="App">
      <Navbar handleOpen={handleOpen} />
      <AddProduct open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
