import './ActorCard.css';

export default function ActorCard({ img, actor, character }) {
    return (
        <div className="actor-card">
            <img src={img ? `https://image.tmdb.org/t/p/original/${img}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3rQbkTrIe6vTMoCXKGcMBU5825pKLMd3dz3yM6Q&s'} alt={''} />
            <h3>{actor}</h3>
            <p>{character}</p>
        </div>
    )
}