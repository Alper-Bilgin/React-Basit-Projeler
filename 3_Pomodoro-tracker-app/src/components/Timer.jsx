import { useDispatch, useSelector } from "react-redux";
import { startSession, stopSession, tick } from "../features/pomodro/pomodroSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Timer() {
  const dispatch = useDispatch();
  const { isRunning, remainingTime, sessionDuration } = useSelector((state) => state.pomodoro);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (remainingTime === 0 && isRunning) {
      toast.success("Pomodoro tamamlandı!");
    }
  }, [remainingTime, isRunning]);

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");

  return (
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-bold">{isRunning ? `${minutes}:${seconds}` : `${sessionDuration}:00`}</h1>
      <button onClick={() => dispatch(isRunning ? stopSession() : startSession())} className="bg-blue-600 text-white px-6 py-2 rounded-xl">
        {isRunning ? "Durdur" : "Başlat"}
      </button>
    </div>
  );
}
