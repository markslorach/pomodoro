![banner](.github/readme-assets/notion-pomodoro-banner.png)

# Pomodoro Widget

A simple, customisable digital clock-style Pomodoro timer designed for Notion embeds and the web.

## Features

- Minimal, distraction-free Pomodoro timer
- Customisable focus and break durations
- Vintage 60s-inspired colour palette
- Sound effects for session transitions and controls
- Keyboard shortcuts for fast control
- Responsive and embeddable widget

## Getting Started

### Installation

```bash
git clone https://github.com/yourusername/notion-pomodoro.git
cd notion-pomodoro
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Usage

- Open the app in your browser.
- Adjust focus and break times in the settings.
- Choose your preferred timer colour in the colour palette.
- Use keyboard shortcuts for quick control.
  

## Embedding in Notion

You can embed the Pomodoro timer directly into your Notion pages using the public instance -

**Embed URL:** [https://pomodoro.markslorach.com/](https://pomodoro.markslorach.com/)

1. In Notion, type "/embed" and select the "Embed" block.
2. Paste the URL above into the embed block.
3. Resize the embed block as needed for the best fit.

## Keyboard Shortcuts

<table>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Space</kbd></td>
      <td>Play/Pause timer</td>
    </tr>
    <tr>
      <td><kbd>R</kbd></td>
      <td>Reset timer</td>
    </tr>
    <tr>
      <td><kbd>F</kbd></td>
      <td>Reset timer</td>
    </tr>
    <tr>
      <td><kbd>B</kbd></td>
      <td>Switch to break mode</td>
    </tr>
    <tr>
      <td><kbd>S</kbd></td>
      <td>Toggle settings panel</td>
    </tr>
    <tr>
      <td><kbd>C</kbd></td>
      <td>Toggle colour palette</td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>Close settings/colour palette</td>
    </tr>
  </tbody>
</table>

## Tech Stack

- Vite React
- TypeScript
- Tailwind CSS

## Acknowledgements

- [use-sound](https://github.com/joshwcomeau/use-sound) — for simple sound effect hooks in React
- [@bradgarropy/use-countdown](https://github.com/bradgarropy/use-countdown) — for countdown timer logic
- [usehooks-ts](https://usehooks-ts.com/) — for a collection of useful React hooks

<br/>

![banner](.github/readme-assets/notion-pomodoro-example.png)