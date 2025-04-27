import { usePomodoro } from "@/hooks/usePomodoro";
import { createContext } from "react";
import { useLocalStorage } from 'usehooks-ts';

type SettingsContextType = {
    focusTime: number;
    breakTime: number;
    timerColour: string;
    setFocusTime: (time: number) => void;
    setBreakTime: (time: number) => void;
    setTimerColour: (colour: string) => void;
};

const defaultColour = "bg-rose-700";

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const { focusTime, setFocusTime, breakTime, setBreakTime } = usePomodoro();
    const [timerColour, setTimerColour] = useLocalStorage<string>('timer-colour', defaultColour);

    return (
        <SettingsContext.Provider value={{
            focusTime,
            breakTime,
            setFocusTime,
            setBreakTime,
            timerColour,
            setTimerColour,
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;