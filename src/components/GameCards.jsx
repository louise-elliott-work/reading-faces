import React, {useState, useCallback} from 'react';
import reference from "/src/reference.json";
import './GameCards.css';

const GameCards = () => {

    // TODO Amend so clicking a card, turns over that card only
    const useToggle = (initialState = true) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(()=> setState((state) => !state), []);
        return [state, toggle];
    }
    const [toggle, setToggle] = useToggle();

    // * Fisher-Yates sorting algorithm used for card shuffling
    const shuffleCards = (reference) => { 
        let currentIndex = reference.length,  randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [reference[currentIndex], reference[randomIndex]] = [reference[randomIndex], reference[currentIndex]];
        }
        return reference;
    }
    // TODO Amend so card order is randomised each time the game ends of the page loads
    shuffleCards(reference);
    console.log(reference);

    return (
        <>
            <p>Click on a card to turn it over and find the pairs</p>

            <div className="cards-grid">
                    {reference.map((emotion) => toggle && (
                        <div key={emotion.id}>
                                <button className="single-card" key={emotion.image} onClick={setToggle}>
                                    <div className="single-card-turned"><img className="image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                                </button>
                        </div>
                    ))}
                    {reference.map((emotion) => toggle && (
                        <div key={emotion.id}>
                                <button className="single-card" key={emotion.name} onClick={setToggle}>
                                    <div className="single-card-turned">{emotion.name}</div>
                                </button>
                        </div>
                    ))}
            </div>
        </>
    )
};

export default GameCards;