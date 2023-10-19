import ActorCard from '../ActorCard/ActorCard';
import './ActorList.css';

export default function ActorList({ actors }) {
    return (
        <div className="actor-list">
            <h1>Actors</h1>
            <div className="actor-list_cards">
                {actors.map(el => (
                    <ActorCard
                        key={el.id}
                        actor={el.name}
                        character={el.character}
                        img={el.profile_path}
                    />
                ))}
            </div>
        </div>
    )
}