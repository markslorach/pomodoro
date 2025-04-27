import { useSettings } from "@/hooks/useSettings";
import ColourSwatch from "./colour-swatch";
import Container from "./container";
import PageHeading from "./page-heading";

// Vintage 60s colour palette
const colourList = [
  "bg-[#A62C2C]",
  "bg-[#CF4917]",
  "bg-[#F9AC3D]",
  "bg-[#758C33]",
  "bg-[#985915]",
  "bg-[#D0B284]",
  "bg-[#2D758C]",
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
