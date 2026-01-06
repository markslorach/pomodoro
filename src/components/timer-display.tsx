import { usePomodoro } from "@/hooks/usePomodoro";
import Container from "./container";
import { formatTime } from "@/lib/helpers";

const TimerDisplay = () => {
  const { mode, focusTimer, breakTimer } = usePomodoro();

  return (
    <Container>
      <time className="text-[68px] text-white select-none z-10">
        {mode === "focus"
          ? formatTime(focusTimer.minutes, focusTimer.seconds)
          : formatTime(breakTimer.minutes, breakTimer.seconds)}
      </time>
      <span className="text-[68px] leading-none text-white/1.5 select-none absolute z-5">
        88:88
      </span>
    </Container>
  );
};

export default TimerDisplay;
