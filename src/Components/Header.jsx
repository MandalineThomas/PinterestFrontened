import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <div className="h-20 px-4 flex items-center">
            <div className="relative w-full">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />

                <input
                    type="text"
                    placeholder="Search your Pins"
                    className="w-full rounded-xl bg-olive-200 py-3 pl-12 pr-4"
                /> 
            </div>
        </div>
    );
}