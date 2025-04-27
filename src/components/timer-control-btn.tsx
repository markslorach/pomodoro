import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type TimerControlButtonProps = {
  onClick: () => void;
  icon: LucideIcon;
  className?: string;
};

const TimerControlButton = ({
  onClick,
  icon: Icon,
  className,
}: TimerControlButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "rounded-full size-6 flex justify-center items-center cursor-pointer hover:text-white text-white/70 transition-all duration-200 bg-transparent hover:bg-transparent",
      className
    )}
  >
    <Icon className="size-5" />
  </button>
);

export default TimerControlButton;
