import { createSlice } from "@reduxjs/toolkit";

// LocalStorage'dan daha önce kaydedilmiş oturumları ve ayarları al
const savedSessions = JSON.parse(localStorage.getItem("pomodoro_data")) || [];
const savedSettings = JSON.parse(localStorage.getItem("pomodoro_settings")) || {};

// Başlangıç staati
const initialState = {
  sessionDuration: savedSettings.sessionDuration || 25, // Oturum süresi dakika olarak
  sessions: savedSessions, // Geçmiş oturumlar
  isRunning: false, // Sayaç çalışıyor mu?
  remainingTime: 0, // Kalan süre saniye olarak
  startTimestamp: null, // Oturumun başladığı zamanı almak için
};

// createSlice ile reducer ve actionlar oluşturuluyor
const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    // Oturumu başlat
    startSession: (state) => {
      state.isRunning = true;
      state.remainingTime = state.sessionDuration * 60;
      state.startTimestamp = Date.now();
    },
    // Her saniye çağrılır, süreyi azaltır
    tick: (state) => {
      if (state.remainingTime > 0) {
        state.remainingTime -= 1;
      } else {
        // Süre bittiğinde oturumu kaydet ve sayaçı durdur
        state.isRunning = false;
        const date = new Date().toISOString().split("T")[0]; // Bugünün tarihi
        // "2025-06-09T12:34:56.789Z";
        const existing = state.sessions.find((s) => s.date === date);
        if (existing) {
          existing.duration += state.sessionDuration;
        } else {
          state.sessions.push({ date, duration: state.sessionDuration });
        }
        // Oturumları localStorage'a kaydet
        localStorage.setItem("pomodoro_data", JSON.stringify(state.sessions));
      }
    },
    // Oturumu durdur
    stopSession: (state) => {
      state.isRunning = false;
      state.remainingTime = 0;
    },
    // Oturum süresini ayarla ve localStorage'a kaydet
    setSessionDuration: (state, action) => {
      state.sessionDuration = action.payload;
      localStorage.setItem("pomodoro_settings", JSON.stringify({ sessionDuration: action.payload }));
    },
  },
});

export const { startSession, tick, stopSession, setSessionDuration } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
