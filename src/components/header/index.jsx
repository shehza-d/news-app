import "./index.css";
import moment from "moment";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { useState } from "react";
const Header = () => {
  //useState ka Variable for theme mode dark ya light
  const [themeMode, setThemeMode] = useState(true);

  //function to enable dark mode
  const toggleThemeMode = () => setThemeMode(!themeMode);

  return (
    <div className="header">
      {/*<nav class="nav-bar">*/}
      <h1>News App</h1>

      <div className="flex">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
        <div className="dateDiv">
          <div id="date">{moment().format("D MMM YYYY")}</div>
          <div id="time">{moment().format("h:mm:s a")}</div>
        </div>
        <button type="button" className="themeBtn" onClick={toggleThemeMode}>
          {themeMode ? <BsFillMoonFill /> : <BsSun />}
        </button>
      </div>
    </div>
  );
};

export default Header;
