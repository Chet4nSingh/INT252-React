import { useEffect, useRef } from "react";

export default function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current.close();
  }, [open]);

  return (
    <dialog ref={dialog} className="w-1/2 h-3/5 p-8 z-10">
      {children}
    </dialog>
  );
}
