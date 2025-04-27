import { cn } from "@/lib/utils";

interface ColourSwatchProps {
  colour: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColourSwatch = ({ colour, isSelected, onClick }: ColourSwatchProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn({
        "size-5 sm:size-6 rounded-full cursor-pointer z-5 transition-all duration-200 hover:scale-110":
          true,
        [colour]: true,
        "ring-2 ring-white scale-110": isSelected,
        "ring-0": !isSelected,
      })}
    ></button>
  );
};

export default ColourSwatch;
