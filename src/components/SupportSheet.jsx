import React, {useState, useCallback} from 'react';
import reference from "/src/reference.json";
import './SupportSheet.css';

const SupportSheet = () => {
    const useToggle = (initialState = false) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(()=> setState((state) => !state), []);
        return [state, toggle];
    }
    const [toggle, setToggle] = useToggle();
    return (
        <>
            <button className="support-sheet-toggle" onClick={setToggle}> Show/Hide Support Sheet </button>
            {toggle && (
                <ul className="reference-grid">
                    {reference.map((emotion) => (
                        <li key={emotion.id}>
                            <div className="image-container"><img className= "emotion-image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                            <h3 className="emotion-name">{emotion.name}</h3>
                        </li>
                    ))}
                </ul>
            )}

        </>
    )
};

export default SupportSheet;