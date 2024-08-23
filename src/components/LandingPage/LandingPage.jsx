import { useState } from "react";
import Header from "./Header";
import Register from "./Register";
import Topics from "./Topics";

export default function LandingPage() {
  const [showModal, setShowModal] = useState({
    register: false,
  });

  function handleShowModal() {
    setShowModal((prevState) => ({
      ...prevState,
      register: true,
    }));
  }

  function handleCloseModal() {
    setShowModal((prevState) => ({
      ...prevState,
      register: false,
    }));
  }

  return (
    <>
      <Register onCloseRegister={handleCloseModal} open={showModal.register} />
      <Header onClickRegister={handleShowModal} />
      <main className="w-full">
        <Topics />
      </main>
    </>
  );
}
