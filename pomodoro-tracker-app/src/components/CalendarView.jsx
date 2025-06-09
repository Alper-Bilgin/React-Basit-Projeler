import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const sessions = useSelector((state) => state.pomodoro.sessions);

  const tileContent = ({ date }) => {
    const dateStr = date.toISOString().split("T")[0];
    const session = sessions.find((s) => s.date === dateStr);
    return session ? <div className="text-xs text-green-700 mt-1">{session.duration} dk</div> : null;
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <Calendar tileContent={tileContent} />
    </div>
  );
}
