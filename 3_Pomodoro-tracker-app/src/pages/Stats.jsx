import CalendarView from "../components/CalendarView";
import Header from "../components/Header";

export default function Stats() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="pt-24 p-4">
        <h1 className="text-3xl font-bold mb-4 text-white drop-shadow">Geçmiş Pomodorolar</h1>
        <CalendarView />
      </div>
    </div>
  );
}
