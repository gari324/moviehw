import BudgetBox from '../BudgetBox/BudgetBox';
import './MovieHeader.css';


export default function MovieHeader({ budget, revenue, runtime, backImg, cardImg, title, text, rate, director }) {
    return (
        <>
            <div style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${backImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
                className="movie-header">
                <div className="movie-box">
                    <img src={`https://image.tmdb.org/t/p/original/${cardImg}`} alt="" />
                    <div className="movie-box_text">
                        <h1>{title}</h1>
                        <h3>PLOT</h3>
                        <p>{text}</p>
                        <div className="movie-box_rate">
                            <div className="rating">
                                <h3>RATING</h3>
                                <div className="rating-number">
                                    {rate}
                                </div>
                            </div>
                            <div className="director">
                                <h3>DIRECTOR</h3>
                                <p>{director}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-budget">
                <BudgetBox item={'Running Time'} value={runtime} />
                <BudgetBox item={'Budget'} value={budget} />
                <BudgetBox item={'Revenue'} value={revenue} />
            </div>
        </>
    )
}