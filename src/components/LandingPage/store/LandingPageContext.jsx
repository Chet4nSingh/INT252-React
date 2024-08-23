import { createContext, useState } from "react";

const LandingPageContext = createContext({
  showRegisterModal: () => {},
  closeRegisterModal: () => {},
  showLoginModal: () => {},
  closeLoginModal: () => {},
});

export function LandingPageContextProvider({ children }) {
  return <LandingPageContext.Provider>{children}</LandingPageContext.Provider>;
}

export default LandingPageContext;
