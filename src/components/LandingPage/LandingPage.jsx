import { useContext } from "react";
import Header from "./Header";
import Register from "./Register";
import Topics from "./Topics";
import LandingPageContext from "./store/LandingPageContext";

export default function LandingPage() {
  const { selectedModal } = useContext(LandingPageContext);

  return (
    <>
      <Register open={selectedModal === "register"} />
      <Header />
      <main className="w-full">
        <Topics />
      </main>
    </>
  );
}
