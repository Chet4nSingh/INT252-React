import { createContext, useState } from "react";

const LandingPageContext = createContext({
  selectedModal: null,
  showRegisterModal: () => {},
  showLoginModal: () => {},
  closeModal: () => {},
});

export function LandingPageContextProvider({ children }) {
  const [selectedModal, setSelectedModal] = useState('null');

  function showRegisterModal() {
    setSelectedModal("register");
  }

  function showLoginModal() {
    setSelectedModal("login");
  }

  function closeModal() {
    setSelectedModal('null');
  }

  const ctxValue = {
    selectedModal,
    showRegisterModal,
    showLoginModal,
    closeModal,
  };

  return (
    <LandingPageContext.Provider value={ctxValue}>
      {children}
    </LandingPageContext.Provider>
  );
}

export default LandingPageContext;
