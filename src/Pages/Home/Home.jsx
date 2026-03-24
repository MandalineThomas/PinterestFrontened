import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Button from "../../Components/Button.jsx";
import ButtonCreateMenu from "./ButtonCreateMenu.jsx";
import { StarIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";



export default function Home() {
    const [isCreateOpen, setIsCreateOpen] = useState(false); //creates a boolean that tracks if the menu is open
    
    const tab = "pb-3 font-semibold text-gray-600";
    const active = "text-black border-b-1 border-black";

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 mt-4 pl-32">Your saved ideas</h1>

            <div className="flex gap-6 mb-6 mt-8 pl-34">
                <NavLink to="" end className={({ isActive }) => `${tab} ${isActive ? active : ""}`}>
                    Pins
                </NavLink>
            
                <NavLink to="/boards" className={({ isActive }) => `${tab} ${isActive ? active : ""}`}> 
                    Boards
                </NavLink>
            </div>

            <div className="flex items-center justify-between pr-30 pl-32 mb-8">
                <div className="flex gap-6 items-center">
                    <AdjustmentsHorizontalIcon className="h-8 w-8" /> 
                    <button className="bg-olive-200 text-body py-2 px-4 rounded-xl flex items-center gap-1 text-sm">
                        <StarIcon className="h-4 w-4"/>Favorites
                    </button>
                </div>

                <div className="relative">
                    <Button onClick={() => setIsCreateOpen(true)}>Create</Button>
            
            {isCreateOpen && (
                <>
                <div className="fixed inset-0 " onClick={() => setIsCreateOpen(false)}/> {/*creates a full screen overlay that listens for clicks to close the menu */}

                <div className="absolute right-0 mt-2 top-full z-50">
                    <ButtonCreateMenu onClose={() => setIsCreateOpen(false)}  //gives the menu a function to close itself
                                      onCreateBoard={() => alert("Board modal clicked")} />  {/*placeholder function for creating a board */}
                </div>
                </>
            )}
            </div>
            </div>
            

            <Outlet />
        </div>

    );
} 