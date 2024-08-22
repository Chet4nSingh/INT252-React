import Header from "./Header";
import Topics from "./Topics";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="w-full mt-8">
        <Topics />
      </main>
    </>
  );
}
