import { useContext, useEffect, useRef } from "react";
import LandingPageContext from "../store/LandingPageContext";
import Modal from "../components/Modal";

export default function Register() {
  const { selectedModal } = useContext(LandingPageContext);

  return (
    <Modal open={selectedModal === 'register'}>
      <p className="mb-8">
        <label className="text-xl mr-8" htmlFor="username">
          Username
        </label>
        <input
          className="border-b-2 text-xl py-2 pl-4 text-white outline-none bg-transparent"
          type="text"
          id="username"
          name="username"
          required
        />
      </p>
    </Modal>
  );
}
