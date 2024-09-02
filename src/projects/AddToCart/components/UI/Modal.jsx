import { useEffect, useRef } from "react";

export default function Modal({ open, onCloseCart, children }) {
  const dialog = useRef();

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
      id="modal"
      ref={dialog}
      onClose={onCloseCart}
      className="w-1/2 h-3/5 p-8 z-10 outline-none bg-slate-700 text-white overflow-y-scroll backdrop:bg-black backdrop:bg-opacity-70"
    >
      {children}
    </dialog>
  );
}
