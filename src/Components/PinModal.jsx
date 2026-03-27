export default function PinModal({ pin, onClose }) {
    if (!pin) {
        return null;
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white p-6 rounded-xl w-[400px] relative">
                <img src={pin.image} alt={pin.title} className="w-full h-80 object-cover rounded-2xl mb-4" />

                <h2 className= "text-2xl font-bold mb-2">{pin.title}</h2>
                <p className="mb-2">{pin.description}</p>
                <p className="mb-2">Board:{pin.board}</p>

                {pin.link && (
                <a href={pin.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Visit Link
                    </a>
                )}
            </div>
        </div>
    );
}