import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./Components/MainPage/MainPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
