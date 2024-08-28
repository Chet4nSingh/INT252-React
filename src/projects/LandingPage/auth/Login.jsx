import { useContext } from "react";
import Modal from "../components/Modal";
import LandingPageContext from "../store/LandingPageContext";

export default function Login() {
  const { selectedModal } = useContext(LandingPageContext);

  return <Modal id="login" open={selectedModal === "login"} />;
}
