import './LoadMore.css';

export default function LoadMore({ onClick }) {
    return (
        <div className="load-more" onClick={onClick}>
            Load More
        </div>
    )
}