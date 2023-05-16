import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>t.leanne dictionary</h1>
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://portfolio-tleanne.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Tracey Buentello
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/tleanne1/react-weather-app."
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://react-weather-app-tleanne.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
