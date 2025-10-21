import { useState } from "react";
import ModalForm from "./Components/ModalForm/ModalForm";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Ariana Rahman",
      email: "ariana.rahman@example.com",
      job: "UI/UX Designer",
      isActive: true,
      rate: 4.8,
    },
    {
      id: 2,
      name: "Sabbir Hasan",
      email: "sabbir.hasan@example.com",
      job: "Full Stack Developer",
      isActive: false,
      rate: 4.2,
    },
  ]);

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleSubmit = () => {
    console.log("Modal submitted");
    setIsOpen(false);
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Table clients={clients} handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        mode={modalMode}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
