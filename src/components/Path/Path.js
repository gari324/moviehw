import { Link } from 'react-router-dom';
import './Path.css';

export default function Path({ title }) {
    return (
        <div className="path-container">
            <h3>
                <Link to={'/'}>Home</Link> | {title}
            </h3>
        </div>
    )
}