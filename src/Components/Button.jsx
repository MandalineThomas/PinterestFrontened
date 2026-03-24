export default function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="bg-red-600 text-white px-4 py-3 rounded-xl hover:bg-red-700 cursor-pointer">
            {children}
        </button>
    );
}