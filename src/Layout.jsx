import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import CreateMenu from "./Components/Sidebar/CreateMenu.jsx";

export default function Layout() {
    const [isCreateOpen, setIsCreateOpen] = useState(false); //creates a boolean that tracks if the menu is open

    return (
        <div className="flex min-h-screen">
            <aside className="w-[72px] border-r border-gray-300">
                <Sidebar onCreateClick={() => setIsCreateOpen(true)} />
            </aside>
        <div className="flex flex-col flex-1">
            <header className="h-[90px]">
                <Header />
            </header>

            <main className=" flex-1">
                <Outlet />
            </main>
        </div>

        {isCreateOpen && (
            <CreateMenu onClose={() => setIsCreateOpen(false)}  //gives the menu a function to close itself
                        onCreateBoard={() => alert("Board modal clicked")} /> //placeholder function for creating a board
        )}
    </div>
        
    );
}
