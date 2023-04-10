import "./index.css";
import moment from "moment";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

export default function Header(props) {
  return (
    <div className="header">
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
        {/* //   props.toggleThemeMode se function call ho raha hy jo ↓ function app.js ma bana hy */}
        <button
          type="button"
          className="themeBtn"
          onClick={props.toggleThemeMode}
        >
          {props.mode ? <BsFillMoonFill /> : <BsSun />}
        </button>
      </div>
    </div>
  );
}
