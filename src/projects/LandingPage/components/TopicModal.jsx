import { useContext, useEffect, useRef } from "react";
import LandingPageContext from "../store/LandingPageContext";

export default function TopicModal({ topic, open }) {
  const dialog = useRef();
  const { closeModal } = useContext(LandingPageContext);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current.close();
  }, [open]);

  return (
    <dialog
      id="modal"
      ref={dialog}
      className="w-3/5 h-4/5 p-8 bg-slate-800 border text-white z-10 backdrop:bg-black backdrop:opacity-70 overflow-y-scroll"
      onClose={closeModal}
    >
      <header>
        <div className="text-6xl flex justify-between items-center">
          <h1>{topic.name}</h1>
          <button onClick={closeModal} className="text-2xl outline-none">X</button>
        </div>
        <p className="mt-4 text-2xl text-slate-300">
          <span>{topic.author}</span> - <span>{topic.created}</span>
        </p>
      </header>
      <main className="mt-8 text-2xl">
        <p>
          {topic.description}
        </p>
      </main>
    </dialog>
  );
}
