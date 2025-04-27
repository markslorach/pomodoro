import { useSettings } from "@/hooks/useSettings";
import { Slider } from "./ui/slider";
import Container from "./container";
import PageHeading from "./page-heading";

const TimerSettings = () => {
  const { focusTime, breakTime, setFocusTime, setBreakTime } = useSettings();

  return (
    <Container className="pt-5 select-none">
      <PageHeading>Timer Settings</PageHeading>

      <div className="flex flex-col gap-3 w-full relative z-5">
        <h2 className="text-white text-center text-[12px]">Focus</h2>
        <Slider
          value={[focusTime]}
          min={5}
          max={60}
          step={5}
          onValueChange={(value) => setFocusTime(value[0])}
        />
        <span className="text-white text-[12px] text-center [word-spacing:5px]">{`${focusTime} minutes`}</span>
      </div>

      <div className="flex flex-col gap-3 w-full relative z-5">
        <h2 className="text-white text-center text-[12px]">Break</h2>
        <Slider
          value={[breakTime]}
          min={5}
          max={30}
          step={5}
          onValueChange={(value) => setBreakTime(value[0])}
        />
        <span className="text-white text-[12px] text-center [word-spacing:5px]">{`${breakTime} minutes`}</span>
      </div>
    </Container>
  );
};

export default TimerSettings;
