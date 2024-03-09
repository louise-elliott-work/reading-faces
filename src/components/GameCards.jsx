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
            <p>Click on a card to turn it over and find the pairs</p>
            <div className="cards-grid">
                    {reference.map((emotion) => toggle && (
                        <div key={emotion.id}>
                            <div>
                                <button className="single-card" key={emotion.image} onClick={setToggle}>
                                    <div className="image-container single-card-turned"><img className= "emotion-image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                                </button>
                            </div>
                            <div>
                                <button className="single-card" key={emotion.name} onClick={setToggle}>
                                    <p className="emotion-name single-card-turned">{emotion.name}</p>
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
};

export default GameCards;