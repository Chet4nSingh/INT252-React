import LandingPage from "./components/LandingPage/LandingPage";
import { LandingPageContextProvider } from "./components/LandingPage/store/LandingPageContext";

function App() {
  return (
    <>
      <LandingPageContextProvider>
        <LandingPage />
      </LandingPageContextProvider>
    </>
  );
}

export default App;
