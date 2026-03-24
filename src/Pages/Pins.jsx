import { useState } from "react";
import pinsData from "../data/pinsData";
import PinCard from "../Components/PinCard";
import PinModal from "../Components/PinModal";

export default function Pins() {
    const [selectedPin, setSelectedPin] = useState(null);

    // const handlePinClick = (pin) => {
    //     setSelectedPin(pin);
    // };

    return (
        <div>
            <div className="px-4 pb-10">
                <div className="columns-8 gap-4">
                    {pinsData.map((pin) => (
                    <div key={pin.id} className="break-inside-avoid mb-4">
                        <PinCard pin={pin} onClick={() => setSelectedPin(pin)}/>
                    </div>
                    ))}
                </div>

                <PinModal pin={selectedPin} onClose={() => setSelectedPin(null)} />
            </div>
        </div>
    );
}