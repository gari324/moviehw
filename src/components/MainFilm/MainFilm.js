import './MainFilm.css';

export default function MainFilm({ img, title, text }) {
    return (
        <div style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }} className="main-film" >
            <div className="main-film_title">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div >
    )
}