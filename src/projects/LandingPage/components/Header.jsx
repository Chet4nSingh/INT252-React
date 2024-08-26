import { useContext } from "react";
import reactLogo from "../../../assets/react.svg";
import LandingPageContext from "../store/LandingPageContext";

export default function Header() {
  const { showRegisterModal } = useContext(LandingPageContext);

  return (
    <header className="w-full p-4 text-white flex justify-between items-center">
      <img
        id="react-logo"
        src={reactLogo}
        alt="React"
        className="w-16 cursor-pointer"
      />
      <h1 className="text-4xl">React Up</h1>
      <nav>
        <button
          onClick={showRegisterModal}
          className="bg-sky-700 hover:bg-sky-800 px-4 py-1 rounded-md mr-4"
        >
          Register
        </button>
        <button className="bg-sky-700 hover:bg-sky-800 px-4 py-1 rounded-md">
          Login
        </button>
      </nav>
    </header>
  );
}
