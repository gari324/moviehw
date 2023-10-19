import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="header">
                <Link to={'/'} >
                    <img src="https://moviemania-app.vercel.app/static/media/react-movie-logo.e88a4cae.svg" alt="" />
                </Link>
                <img src="https://moviemania-app.vercel.app/static/media/tmdb_logo.2ecbb19c.svg" alt="" />
            </div>
        </header>
    )
}