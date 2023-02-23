export default function Header() {
  return (
    <header className="bg-header bg-center bg-cover bg-fixed h-screen text-white pt-20">
      <div className="bg-black/30 h-full font-heading flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold px-4 py-4 mb-4">
          Enjoy modern <br />
          Japanese cuisine
        </h1>
        <p className="text-lg font-light mb-10">
          Located in the heart of <br /> Toronto's Financial District
        </p>
        <button className="bg-white text-black rounded-full px-10 py-4 transition-all btn">
          BROWSE MENU
        </button>
      </div>
    </header>
  );
}
