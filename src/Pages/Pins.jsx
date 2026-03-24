import pinsData from "../data/pinsData";
import { AdjustmentsHorizontalIcon, StarIcon } from "@heroicons/react/24/outline";

export default function Pins() {
    return (
        <div>
            <div className="px-4 pb-10">
                <div className="columns-8 gap-4">
                    {pinsData.map((pin) => (
                    <div key={pin.id} className="break-inside-avoid mb-4">
                        <img src={pin.image} 
                             alt={pin.title} 
                             className="w-full rounded-2xl" 
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}