import { useState } from "react";
import { useParams } from "react-router-dom";
import pinsData from "../data/pinsData";
import PinCard from "../Components/PinCard";
import PinModal from "../Components/PinModal";  

export default function BoardDetail() {
    const { boardName } = useParams();
    const [selectedPin, setSelectedPin] = useState(null);

    const boardPins = pinsData.filter((pin) => pin.board === boardName);

    return (
        <div className="px-6 pb-10">
            <h1 className="text-3xl font-bold mb-2">{boardName}</h1>
            <p className="text-gray-500 mb-6">{boardPins.length} Pins</p>

            <div className="columns-3 md:columns-4 lg:columns-8 gap-4">
                {boardPins.map((pin) => (
                    <div key={pin.id} className="break-inside-avoid mb-4">
                        <PinCard pin={pin} onClick={() => setSelectedPin(pin)} />
                    </div>
                ))}
            </div>
        </div>
    );
}