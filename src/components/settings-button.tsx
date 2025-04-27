import { Settings as SettingsIcon } from "lucide-react";

type SettingsButtonProps = {
  onClick: () => void;
};

const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full flex justify-center items-center size-6 absolute top-2 right-2 z-20 cursor-pointer text-white/70 hover:text-white/90 transition-colors duration-200"
    >
      <SettingsIcon className="size-5" />
    </button>
  );
};

export default SettingsButton;
