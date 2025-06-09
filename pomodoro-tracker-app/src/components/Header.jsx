import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header
      className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-20"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.0))",
        backdropFilter: "blur(0px)",
      }}
    >
      <h1 className="text-2xl font-bold text-blue-700 drop-shadow">Pomodoro Tracker</h1>
      <nav className="flex gap-6">
        <Link to="/" className={`font-medium ${pathname === "/" ? "text-blue-600 underline" : "text-gray-100 hover:text-blue-300 drop-shadow"}`}>
          Pomodoro
        </Link>
        <Link to="/stats" className={`font-medium ${pathname === "/stats" ? "text-blue-600 underline" : "text-gray-100 hover:text-blue-300 drop-shadow"}`}>
          Takvim
        </Link>
      </nav>
    </header>
  );
}
