import { useState } from "react";
import TimerUI from "./timer-ui";
import SettingsButton from "./settings-button";
import TimerItems from "./timer-items";
import ColourSettingsButton from "./colour-settings-button";
import ColourPalette from "./colour-palette";
import TimerSettings from "./timer-setttings";
import { useEventListener } from "usehooks-ts";

const Pomodoro = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showColourSettings, setShowColourSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
    setShowColourSettings(false);
  };

  const toggleColourSettings = () => {
    setShowColourSettings((prev) => !prev);
    setShowSettings(false);
  };

  useEventListener("keydown", (e) => {
    switch (e.code) {
      case "KeyS":
        e.preventDefault();
        toggleSettings();
        break;
      case "KeyC":
        e.preventDefault();
        toggleColourSettings();
        break;
      case "Escape":
        e.preventDefault();
        setShowSettings(false);
        setShowColourSettings(false);
        break;
    }
  });

  return (
    <TimerUI>
      <ColourSettingsButton onClick={toggleColourSettings} />

      <SettingsButton onClick={toggleSettings} />

      {showSettings && <TimerSettings />}
      {showColourSettings && <ColourPalette />}
      {!showSettings && !showColourSettings && <TimerItems />}
    </TimerUI>
  );
};

export default Pomodoro;
