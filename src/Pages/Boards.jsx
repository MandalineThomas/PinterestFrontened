import pinsData, { boards } from "../data/pinsData";

export default function Boards() {
    return (
        <div className="px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {boards.map((board) => (
                    <div key={board} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold">{board}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}