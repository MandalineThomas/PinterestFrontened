import { NavLink } from "react-router-dom";
import pinterestLogo from "../../assets/pinterest-logo.png";
import homeicon from "../../assets/homeicon.png";
import addicon from "../../assets/addicon.png";

export default function Sidebar({ onCreateClick }) {
    const item = "grid place-items-center h-10 w-12 rounded-xl hover:bg-gray-100 cursor-pointer";

    return (
        <nav className="h-screen pt-6 flex flex-col items-center gap-10">
            <img src={pinterestLogo} alt="Pinterest Logo" className="w-6 h-6 " />

            <NavLink to="/" end className={item} aria-label="Home">
                <img src={homeicon} alt="Home Icon" className="w-6 h-6 " />
            </NavLink>

            <button type="button" onClick={onCreateClick} className={item} aria-label="Create">
                <img src={addicon} alt="Create Icon" className="w-6 h-6 " />
            </button>
        </nav>
    );
}