export default function PinCard({ pin, onClick }) {
    return (
        <div onClick={onClick}>
            <img src={pin.image} alt={pin.title} className= "w-full rounded-2xl block hover:opacity-80" transition/>
        </div>
    );
}