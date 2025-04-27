import { PomodoroProvider } from "./pomodoro-provider";
import SettingsProvider from "./settings-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PomodoroProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </PomodoroProvider>
  );
};

export default Providers;
