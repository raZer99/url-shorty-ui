import { useState } from "react";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortKey, setShortKey] = useState("");
  const [error, setError] = useState("");

  const shortenUrl = async () => {
    setError("");
    setShortKey("");

    if (!longUrl) {
      setError("Please enter a URL");
      return;
    }

    try {
      const response = await fetch(
          `http://localhost:8080/api/shorten?url=${encodeURIComponent(longUrl)}`,
          { method: "POST" }
      );

      const data = (await response.text()).trim();
      setShortKey(data);
    } catch {
      setError("Backend not reachable");
    }
  };

  return (
      <div className="page">

        <div className="card">
          <div className="title">URL Shortener</div>
          <div className="subtitle">
            Turn long links into clean, shareable URLs
          </div>

          <input
              className="input"
              type="text"
              placeholder="Paste a long URL here..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
          />

          <button className="button" onClick={shortenUrl}>
            Shorten Link
          </button>

          {error && <div className="error">{error}</div>}

          {shortKey && (
              <div className="result">
                Short URL:
                <br />
                <a
                    href={`http://localhost:8080/api/${shortKey}`}
                    target="_blank"
                    rel="noreferrer"
                >
                  http://localhost:8080/api/{shortKey}
                </a>
              </div>
          )}

          <div style={{ marginTop: "32px", fontSize: "13px", color: "#64748b" }}>
            Made by <span style={{ color: "#38bdf8", fontWeight: "600" }}>raZer</span>
          </div>

        </div>
      </div>
  );
}

export default App;
