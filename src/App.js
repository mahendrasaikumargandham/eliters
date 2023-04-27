import "./App.css";
import DesktopScreen from "./components/DesktopScreen";

function App() {
  return (
    <div className="app">
      <h1>Hello world</h1>
      <div className="container">
        <div className="dock">
          <DesktopScreen />
        </div>
      </div>
      <div className="box">
        <div className="box_container"></div>
      </div>
    </div>
  );
}

export default App;
