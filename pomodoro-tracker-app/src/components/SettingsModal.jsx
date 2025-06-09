import { useDispatch, useSelector } from "react-redux";
import { setSessionDuration } from "../features/pomodro/pomodroSlice";

export default function SettingsModal() {
  const dispatch = useDispatch();
  const sessionDuration = useSelector((state) => state.pomodoro.sessionDuration);

  const handleChange = (e) => {
    const newDuration = parseInt(e.target.value);
    if (!isNaN(newDuration) && newDuration > 0) {
      dispatch(setSessionDuration(newDuration));
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Seans Süresi (dk):</label>
      <input type="number" value={sessionDuration} onChange={handleChange} className="border px-3 py-1 rounded" />
    </div>
  );
}
