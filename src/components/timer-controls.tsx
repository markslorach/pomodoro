import { Pause, Play, RotateCcw, Coffee } from "lucide-react";
import TimerControlButton from "./timer-control-btn";
import { usePomodoro } from "@/hooks/usePomodoro";

const TimerControls = () => {
  const { focusTimer, breakTimer, handlePlayPause, handleReset, handleBreak } =
    usePomodoro();

  return (
    <div className="flex gap-2.5 absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
      <TimerControlButton
        onClick={handlePlayPause}
        icon={focusTimer.isRunning || breakTimer.isRunning ? Pause : Play}
      />
      <TimerControlButton onClick={handleReset} icon={RotateCcw} />
      <TimerControlButton onClick={handleBreak} icon={Coffee} />
    </div>
  );
};

export default TimerControls;
