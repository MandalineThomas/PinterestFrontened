import { NavLink } from "react-router-dom";

export default function CreateMenu({ onClose, onCreateBoard }) {
    return (
        <div className="fixed inset-0" onClick={onClose}> {/*creates a full screen overlay that listens for clicks to close the menu */}
            <div                 
                className="absolute left-20 mt-44 w-80 bg-white rounded-xl shadow-md/40" 
                 onClick={(e) => e.stopPropagation()}> {/*creates the menu itself, and stops clicks from propagating to the overlay */}
                
                <h1 className="text-xl font-bold mb-3 mt-4 ml-4">Create</h1>

                <NavLink to="/createpin" className="block px-4 py-2 hover:bg-gray-100" onClick={onClose}>
                 Pin
                 <p className="text-sm text-gray-500 mt-1">
                    Post your photos or videos and add links, stickers, effects and more
                 </p>
                </NavLink>
                
                <button type="button" className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { onClose(); onCreateBoard();}}> 
                 Board
                 <p className="text-sm text-gray-500 mt-1">
                    Organize a collection of your favorite Pins by creating a board
                 </p>
                </button>
            </div>
        </div>

    ); 
}