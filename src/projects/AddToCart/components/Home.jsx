import Header from "./Header";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-8 w-full">
        <Products />
      </main>
    </>
  );
}
