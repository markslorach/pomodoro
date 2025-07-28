import { useSettings } from "@/hooks/useSettings";
import { cn } from "@/lib/utils";

const TimerUI = ({ children }: { children: React.ReactNode }) => {
  const { timerColour } = useSettings();

  return (
    <div
      id="timer-casing"
      className={cn(
        `h-[203px] w-full max-w-[427px] min-w-[300px] shadow-inner shadow-white/20 rounded-[35px] overflow-hidden p-3 relative`,
        timerColour
      )}
    >
      <div
        id="shine-over-screen-and-casing"
        data-tauri-drag-region
        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      >
        <div className="absolute h-70 w-[155%] bg-white/2 blur-xs -rotate-[30deg]"></div>
      </div>

      <div
        id="shadow-on-casing"
        data-tauri-drag-region
        className="absolute inset-0 rounded-[31px] bg-black/10 m-1"
      ></div>

      <div
        id="screen-outer-edge"
        className="w-full overflow-hidden relative h-full shadow-inner shadow-white/15 bg-black rounded-[28px] p-[3px]"
      >
        <div
          id="gradient-on-screen"
          data-tauri-drag-region
          className="absolute pointer-events-none z-5 bg-gradient-to-br from-0% from-black/80 to-transparent to-40% inset-0"
        />

        <div
          id="screen-inner-top-and-bottom-border"
          className="bg-neutral-900 relative border-t-4 border-b-4 border-zinc-700 rounded-[25px] w-full h-full overflow-hidden"
        >
          <div
            id="bottom-glare"
            data-tauri-drag-region
            className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/3 to-transparent"
          />

          {children}
        </div>
      </div>
    </div>
  );
};

export default TimerUI;
