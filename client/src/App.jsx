import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Artisan Box</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
