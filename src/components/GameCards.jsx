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

    // TODO correct this so it is a loop rather than manually searching by index reference
    let namesOnly;
    const namesOnlyArray = () => {
        namesOnly = [reference[0].name, reference[1].name, reference[2].name, reference[3].name, reference[4].name, reference[5].name, reference[6].name, reference[7].name, reference[8].name, reference[9].name];
        return(namesOnly)
    }
    namesOnlyArray(namesOnly);
    // * Fisher-Yates sorting algorithm for card shuffling
    const namesOnlyShuffled = (namesOnly) => { 
        let currentIndex = namesOnly.length,  randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [namesOnly[currentIndex], namesOnly[randomIndex]] = [namesOnly[randomIndex], namesOnly[currentIndex]];
        }
    }
    namesOnlyShuffled(namesOnly);

    // TODO correct this so it is a loop rather than manually searching by index reference
    let imagesOnly;
    const imagesOnlyArray = () => {
        imagesOnly = [reference[0].image, reference[1].image, reference[2].image, reference[3].image, reference[4].image, reference[5].image, reference[6].image, reference[7].image, reference[8].image, reference[9].image];
        return(imagesOnly)
    }
    imagesOnlyArray(imagesOnly);
    // * Fisher-Yates sorting algorithm for card shuffling
    const imagesOnlyShuffled = (imagesOnly) => { 
        let currentIndex = imagesOnly.length,  randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [imagesOnly[currentIndex], imagesOnly[randomIndex]] = [imagesOnly[randomIndex], imagesOnly[currentIndex]];
        }
    }
    imagesOnlyShuffled(imagesOnly);

    return (
        <>
            <p className='instruction'>Click on a card to turn it over and find the pairs</p>
            <div className="cards-grid">
                {namesOnly.map((emotion, index) => (
                    <button key={index} className="single-card" onClick={handleClick}>
                        <div className={`${stateCheck}`}><p className="text">{emotion}</p></div>
                    </button>
                ))}
                {imagesOnly.map((emotion, index) => (
                    <button key={index} className="single-card" onClick={handleClick}>
                        <div className={`${stateCheck}`}><img className="image" src={emotion} alt={`Photo of ${emotion}`}></img></div>
                    </button>
                ))}

            </div>
        </>
    )

};

export default GameCards;