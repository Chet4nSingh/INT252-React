import { useRef } from "react";

export default function Modal({ children }) {
  const dialog = useRef();
  return (
    <dialog ref={dialog} className="w-1/2 h-3/5 p-8 z-10" open>
      {children}
    </dialog>
  );
}
