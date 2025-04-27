import { usePomodoro } from "@/hooks/usePomodoro";
import Container from "./container";

const TimerDisplay = () => {
  const { mode, focusTimer, breakTimer } = usePomodoro();

  return (
    <Container>
      <time className="text-[68px] text-white select-none z-10">
        {mode === "focus" ? focusTimer.formatted : breakTimer.formatted}
      </time>
      <span
        className="text-[68px] leading-none text-white/2 select-none absolute z-5"
      >
        88:88
      </span>
    </Container>
  );
};

export default TimerDisplay;
