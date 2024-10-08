import { useContext, useEffect, useRef } from "react";
import LandingPageContext from "../store/LandingPageContext";

export default function Modal({ open, children, id }) {
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

  const inputStyles =
    "border-b-2 text-xl py-2 pl-4 text-white outline-none bg-transparent";

  return (
    <dialog
      id="modal"
      ref={dialog}
      className="px-8 py-6 mt-48 bg-slate-800 text-white border backdrop:bg-black backdrop:opacity-70"
      onClose={closeModal}
    >
      <div className="text-right">
        <button onClick={closeModal} className="text-2xl outline-none mb-4">
          X
        </button>
      </div>
      <form>
        {children}
        <p className="mb-8">
          <label className="text-xl mr-8" htmlFor={`${id}-email`}>
            Email
          </label>
          <input
            className={inputStyles}
            type="email"
            id={`${id}-email`}
            name="email"
            required
          />
        </p>
        <p className="mb-8">
          <label className="text-xl mr-8" htmlFor={`${id}-password`}>
            Password
          </label>
          <input
            className={inputStyles}
            type="password"
            id={`${id}-password`}
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
