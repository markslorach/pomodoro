import { createContext, useState, ReactNode, useEffect } from "react";
import useCountdown, { Countdown } from "@bradgarropy/use-countdown";
import { useLocalStorage, useEventListener } from "usehooks-ts";
import useSound from "use-sound";
import startPauseSound from "../assets/sfx/start-pause.mp3";
import sessionStartFinishSound from "../assets/sfx/session-start-finish.mp3";

export type Mode = "focus" | "break";

type PomodoroContextType = {
  mode: Mode;
  focusTime: number;
  breakTime: number;
  focusTimer: Countdown;
  breakTimer: Countdown;
  handlePlayPause: () => void;
  handleReset: () => void;
  handleBreak: () => void;
  setFocusTime: (time: number) => void;
  setBreakTime: (time: number) => void;
};

export const PomodoroContext = createContext<PomodoroContextType | undefined>(
  undefined
);

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("focus");
  const [focusTime, setFocusTimeState] = useLocalStorage<number>(
    "focus-time",
    25
  );
  const [breakTime, setBreakTimeState] = useLocalStorage<number>(
    "break-time",
    5
  );

  const [playStartPause] = useSound(startPauseSound);
  const [playSessionStartFinish] = useSound(sessionStartFinishSound);

  const focusTimer = useCountdown({
    seconds: focusTime * 60,
    onCompleted: () => {
      breakTimer.reset();
      setMode("break");
      breakTimer.start();
      playSessionStartFinish();
    },
  });

  const breakTimer = useCountdown({
    seconds: breakTime * 60,
    onCompleted: () => {
      focusTimer.reset();
      setMode("focus");
      focusTimer.start();
      playSessionStartFinish();
    },
  });

  const setFocusTime = (time: number) => {
    setFocusTimeState(time);
    if (mode === "focus") {
      focusTimer.reset();
    }
  };

  const setBreakTime = (time: number) => {
    setBreakTimeState(time);
    if (mode === "break") {
      breakTimer.reset();
    }
  };

  useEffect(() => {
    if (mode === "focus") {
      focusTimer.reset();
    }
  }, [focusTime]);

  useEffect(() => {
    if (mode === "break") {
      breakTimer.reset();
    }
  }, [breakTime]);

  const handlePlayPause = () => {
    if (mode === "focus") {
      if (focusTimer.isRunning) {
        focusTimer.pause();
        playStartPause();
      } else {
        focusTimer.start();
        playStartPause();
      }
    } else {
      if (breakTimer.isRunning) {
        breakTimer.pause();
        playStartPause();
      } else {
        breakTimer.start();
        playStartPause();
      }
    }
  };

  const handleReset = () => {
    setMode("focus");
    focusTimer.reset();
    breakTimer.reset();
  };

  const handleBreak = () => {
    setMode("break");
    focusTimer.pause();
    breakTimer.reset();
  };

  useEventListener("keydown", (e) => {
    switch (e.code) {
      case "Space":
        e.preventDefault();
        handlePlayPause();
        break;
      case "KeyR":
      case "KeyF":
        e.preventDefault();
        handleReset();
        break;
      case "KeyB":
        e.preventDefault();
        handleBreak();
        break;
    }
  });

  return (
    <PomodoroContext.Provider
      value={{
        mode,
        focusTime,
        breakTime,
        focusTimer,
        breakTimer,
        handlePlayPause,
        handleReset,
        handleBreak,
        setFocusTime,
        setBreakTime,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
