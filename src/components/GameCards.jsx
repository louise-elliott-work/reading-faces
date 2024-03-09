import React, {useState} from 'react';
import reference from "/src/reference.json";
import './GameCards.css';

const GameCards = () => {

    // TODO Amend so clicking a card, turns over that card only
    const [cardState, setCardState] = useState(false);
    const handleClick= () => {
        setCardState(cardState => !cardState);
        console.log(cardState);
    }

    // * Assign relevant class name to toggle card between active and inactive
    let stateCheck = cardState ? 'active-card' : 'inactive-card';

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

    return (
        <>
            <p>Click on a card to turn it over and find the pairs</p>
            <div className="cards-grid">
                    {reference.map((emotion) => (
                        <div key={emotion.id}>
                                <button className="single-card" key={emotion.image} onClick={handleClick}>
                                    <div className={`${stateCheck}`}><img className="image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                                </button>
                        </div>
                    ))}
                    {reference.map((emotion) => (
                        <div key={emotion.id}>
                                <button className="single-card" key={emotion.name} onClick={handleClick}>
                                    <div className={`${stateCheck}`}>{emotion.name}</div>
                                </button>
                        </div>
                    ))}
            </div>
        </>
    )
};

export default GameCards;