import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import Babalon from './babalon.png'

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(7);
  const [breakMinutes, setBreakMinutes] = useState(11);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        <img src={Babalon} className="babalon"/>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
