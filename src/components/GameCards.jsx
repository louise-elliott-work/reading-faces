import React, {useState, useCallback} from 'react';
import reference from "/src/reference.json";
import './GameCards.css';

const GameCards = () => {

    const useToggle = (initialState = true) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(()=> setState((state) => !state), []);
        return [state, toggle];
    }
    const [toggle, setToggle] = useToggle();

    return (
        <>
            <div>Game Cards below</div>

            <ul className="reference-grid">
                    {reference.map((emotion) => toggle && (
                        <button className="game-card" key={emotion.id} onClick={setToggle}>
                            <div className="image-container"><img className= "emotion-image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                            <p className="emotion-name">{emotion.name}</p>
                        </button>
                    ))}
            </ul>
            
        </>
    )
};

export default GameCards;