import { usePomodoro } from "@/hooks/usePomodoro";

const ModeDisplay = () => {
  const { mode } = usePomodoro();

  return (
    <div className="text-blue-400 leading-none text-sm select-none absolute bottom-2.5 left-1/2 -translate-x-1/2">
      <p>{mode === "focus" ? "Focus" : "Break"}</p>
    </div>
  );
};

export default ModeDisplay;
