import { Link } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard({ img, id }) {

    const currentImg = img ? `https://image.tmdb.org/t/p/original/${img}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

    return (
        <Link to={`/movie/${id}`}>
            <div className="movie-card" style={{
                backgroundImage: `url(${currentImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }} >
            </div>
        </Link>
    )
}