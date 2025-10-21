import { useState } from "react";
import ModalForm from "./Components/ModalForm/ModalForm";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("Modal Mode Added");
    } else {
      console.log("Modal Mode Edited");
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Table />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default App;
