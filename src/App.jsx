import LandingPage from "./projects/LandingPage/components/LandingPage";
import { LandingPageContextProvider } from "./projects/LandingPage/store/LandingPageContext";

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
