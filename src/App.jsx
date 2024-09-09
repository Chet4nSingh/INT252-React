// import Home from "./projects/AddToCart/components/Home";
import College from "./projects/Lectures/College";
import University from "./projects/Lectures/University";
import Home from "./projects/ManagementApp/components/Home";
import LandingPage from "./projects/LandingPage/components/LandingPage";
import { LandingPageContextProvider } from "./projects/LandingPage/store/LandingPageContext";

function App() {
  return (
    <>
      <LandingPageContextProvider>
        <LandingPage />
      </LandingPageContextProvider>

      {/* <Home /> */}
      {/* <College /> */}
    </>
  );
}

export default App;
