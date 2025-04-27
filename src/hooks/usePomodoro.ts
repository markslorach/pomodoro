import { PomodoroContext } from "@/providers/pomodoro-provider";
import { useContext } from "react";

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
}; 