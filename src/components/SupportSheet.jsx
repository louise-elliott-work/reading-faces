import React, {useState, useCallback} from 'react';
import EmotionsCarousel from './EmotionsCarousel';
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
            <div className='support-section'>
                <button className="support-sheet-toggle" onClick={setToggle}> <img src="/star-regular.svg" className="help-button"></img> <p className="button-label">Show help</p> </button>
                {toggle && (
                    <EmotionsCarousel className="support-carousel"/>
                )}
            </div>
        </>
    )
};

export default SupportSheet;