import SettingsModal from "../components/SettingsModal";
import Timer from "../components/Timer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="flex-1 flex items-center justify-center pt-24">
        <div className="w-full max-w-5xl mx-auto bg-white/70 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Sol: Ayarlar */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-blue-700">Ayarlar</h2>
            <SettingsModal />
            <div className="mt-8 text-gray-500 text-sm">
              <p>Pomodoro süresini ayarlayın ve odaklanmaya başlayın!</p>
            </div>
          </div>
          {/* Sağ: Timer */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <h2 className="text-xl font-semibold mb-6 text-blue-700">Zamanlayıcı</h2>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}
