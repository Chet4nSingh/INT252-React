import { createContext, useState } from "react";

const LandingPageContext = createContext({
  selectedModal: null,
  selectedTopic: {},
  showRegisterModal: () => {},
  showLoginModal: () => {},
  showTopicModal: () => {},
  closeModal: () => {},
});

export function LandingPageContextProvider({ children }) {
  const [selectedModal, setSelectedModal] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  function showRegisterModal() {
    setSelectedModal("register");
  }

  function showLoginModal() {
    setSelectedModal("login");
  }

  function showTopicModal(topic) {
    setSelectedTopic(topic);
  }

  function closeTopicModal() {
    setSelectedTopic('');
  }

  function closeModal() {
    setSelectedModal('');
    setSelectedTopic('');
  }

  const ctxValue = {
    selectedModal,
    selectedTopic,
    showRegisterModal,
    showLoginModal,
    showTopicModal,
    closeModal,
  };

  return (
    <LandingPageContext.Provider value={ctxValue}>
      {children}
    </LandingPageContext.Provider>
  );
}

export default LandingPageContext;
