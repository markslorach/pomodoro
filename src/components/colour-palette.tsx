import { useSettings } from "@/hooks/useSettings";
import ColourSwatch from "./colour-swatch";
import Container from "./container";
import PageHeading from "./page-heading";

const colourList = [
  "bg-red-700",
  "bg-orange-700",
  "bg-lime-700",
  "bg-emerald-700",
  "bg-teal-700",
  "bg-sky-700",
  "bg-fuchsia-700",
  "bg-pink-700",
  "bg-rose-700",
];

const ColourPalette = () => {
  const { timerColour, setTimerColour } = useSettings();

  return (
    <Container>
      <PageHeading>Colour Palette</PageHeading>

      <div className="flex flex-wrap gap-2">
        {colourList.map((colour) => (
          <ColourSwatch
            key={colour}
            colour={colour}
            isSelected={timerColour === colour}
            onClick={() => setTimerColour(colour)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ColourPalette;
