import reactLogo from "../../assets/react.svg";

export default function Header({ onClickRegister }) {
  return (
    <header className="w-full p-4 text-white flex justify-between items-center">
      <img
        id="react-logo"
        src={reactLogo}
        alt="React"
        className="w-16 cursor-pointer"
      />
      <h1 className="text-4xl">React Landing Page</h1>
      <nav>
        <button
          onClick={onClickRegister}
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
