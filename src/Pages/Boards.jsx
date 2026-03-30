import pinsData, { boards } from "../data/pinsData";

export default function Boards() {
    return (
        <div className="px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {boards.map((boardName) => {
                    const boardPins = pinsData.filter((pin) => pin.board === boardName);
                    const cover = boardPins.slice(0,3);

                    return (
                        <div key={boardName} className="group cursor-pointer">
                            <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3]">
                                {cover.length== 0 ? (
                                    <div className="h-full w-full" />
                                ) : (
                                    <div className="h-full w-full grid grid-rows-3">
                                        <img src={cover[0].image} alt="" className="w-full h-full object-cover" />
                                        <img src={(cover[1] ?? cover[0]).image} alt="" className="w-full h-full object-cover" />
                                        <img src={(cover[2] ?? cover[0]).image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    )};
                            </div>

                            <div className="mt-2">
                                <div className="font-semibold">{boardName}</div>
                                <div className="text-sm text-gray-500">{boardPins.length} Pins</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    </div>
    );
}