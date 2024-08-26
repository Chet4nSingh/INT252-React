import { useContext } from "react";
import Header from "./Header";
import Register from "../auth/Register";
import Topics from "./Topics";
import LandingPageContext from "../store/LandingPageContext";
import Login from "../auth/Login";

export default function LandingPage() {
  const { selectedModal } = useContext(LandingPageContext);

  return (
    <>
      <Register open={selectedModal === "register"} />
      <Login />
      <Header />
      <main className="w-full">
        <Topics />
      </main>
    </>
  );
}
