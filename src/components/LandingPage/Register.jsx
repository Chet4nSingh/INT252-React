import { useContext, useEffect, useRef } from "react";
import LandingPageContext from "./store/LandingPageContext";

export default function Register({ open }) {
  const dialog = useRef();
  const { closeModal } = useContext(LandingPageContext);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => {
      dialog.current.close();
    };
  }, [open]);

  return (
    <dialog
      id="register-modal"
      ref={dialog}
      className="px-8 py-6 mt-48 bg-slate-800 text-white border backdrop:bg-black backdrop:opacity-50"
      onClose={closeModal}
    >
      <div className="text-right">
        <button
          onClick={closeModal}
          className="text-2xl outline-none mb-4"
        >
          X
        </button>
      </div>
      <form>
        <p className="mb-8">
          <label className="text-xl mr-8" htmlFor="username">
            Username
          </label>
          <input
            className="border-b-2 text-xl py-2 pl-4 text-white outline-none bg-transparent "
            type="text"
            id="username"
            name="username"
            required
          />
        </p>
        <p className="mb-8">
          <label className="text-xl mr-8" htmlFor="email">
            Email
          </label>
          <input
            className="border-b-2 text-xl py-2 pl-4 text-white outline-none bg-transparent "
            type="email"
            id="email"
            name="email"
            required
          />
        </p>
        <p className="mb-8">
          <label className="text-xl mr-8" htmlFor="password">
            Password
          </label>
          <input
            className="border-b-2 text-xl py-2 pl-4 text-white outline-none bg-transparent "
            type="password"
            id="password"
            name="password"
            required
          />
        </p>
        <button
          className="px-4 py-2 bg-white text-slate-800 hover:border hover:bg-slate-800 hover:text-white"
          type="button"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
}
