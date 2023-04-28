import "./App.css";
import DesktopScreen from "./components/DesktopScreen";
import Dock from "./components/Dock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleHomeScreen from "./components/GoogleHomeScreen";
import BlankScreen from "./components/BlankScreen";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Dock />} />
            <Route path="/chrome" element={<GoogleHomeScreen />} />
            <Route path="/blank" element={<BlankScreen />} />
          </Routes>
        </Router>
      </div>
      <div className="box">
        <div className="box_container"></div>
      </div>
    </div>
  );
}

export default App;
