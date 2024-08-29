export default function Header() {
  return (
    <header className="text-white flex justify-between items-center p-8 pr-16">
      <h1 className="text-8xl inline">React Shop</h1>
      <div>
        <button className="text-4xl px-4 py-2 pb-3 bg-sky-600 hover:bg-sky-700 rounded-lg">
          Cart (0)
        </button>
      </div>
    </header>
  );
}
