import { NavLink } from "react-router-dom";

export default function ButtonCreateMenu({ onClose, onCreateBoard }) {
    return (
            <div                 
                className="w-48 bg-white rounded-xl shadow-md/40" 
                 onClick={(e) => e.stopPropagation()}> {/*creates the menu itself, and stops clicks from propagating to the overlay */}

                <NavLink to="/createpin" className="block px-4 py-2 hover:bg-gray-100" onClick={onClose}>
                 Pin
                </NavLink>
                
                <button type="button" className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { onClose(); onCreateBoard();}}>
                 Board
                </button>
            </div>
    ); 
}