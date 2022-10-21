import moment from 'moment';
import './index.css'

const Header = () => {
    return (
        <div className="header">
       {/*<nav class="nav-bar">*/}
            <h1>
                News App
            </h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div class="dateDiv">
                <div>
                    <div id="date">{moment().format(
    "D MMM YYYY"
  )}</div>
                    <div id="time">{ moment().format("h:mm:s a")}</div>
                </div>
                <button>O</button>
            </div>
        </div>
    );
};

export default Header;
