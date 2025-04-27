import { Palette } from "lucide-react";

type ColourSettingsButtonProps = {
  onClick: () => void;
};

const ColourSettingsButton = ({ onClick }: ColourSettingsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full flex justify-center items-center size-6 absolute top-2 left-2 z-20 cursor-pointer text-white/70 hover:text-white/90 transition-colors duration-200"
    >
      <Palette className="size-5" />
    </button>
  );
};

export default ColourSettingsButton;
