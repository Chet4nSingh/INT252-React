import { useContext, useEffect, useRef } from "react";
import LandingPageContext from "../store/LandingPageContext";

export default function TopicModal({ topic, open }) {  
  const dialog = useRef();
  const {closeModal} = useContext(LandingPageContext);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current.close();
  }, [open]);

  return (
    <dialog id="modal" ref={dialog} className="w-3/5 h-4/5 p-8 bg-slate-800 border text-white z-10 backdrop:bg-black backdrop:opacity-70" onClose={closeModal}>
      <h1 className="text-6xl">{topic.name}</h1>
    </dialog>
  );
}
