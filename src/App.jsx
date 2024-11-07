// import Home from "./projects/AddToCart/components/Home";

import Home from "./projects/Practice/UserDetails/Home";
import LandingPage from "./projects/LandingPage/components/LandingPage";
import { LandingPageContextProvider } from "./projects/LandingPage/store/LandingPageContext";

function App() {
  return (
    <>

      {/* <LandingPageContextProvider>
        <LandingPage />
      </LandingPageContextProvider> */}

      <Home />
    </>
  );
}

export default App;
