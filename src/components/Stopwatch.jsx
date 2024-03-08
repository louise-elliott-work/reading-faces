import React, { useState } from "react";
import StopwatchButtons from "./StopwatchButtons.jsx";
import Timer from "./Timer.jsx";
import './Stopwatch.css';

const Stopwatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <>
            <div className="stop-watch">
                <Timer time={time} />
                <StopwatchButtons
                    active={isActive}
                    handleStart={handleStart}
                    handleReset={handleReset}
                />
            </div>
        </>
    )
};

export default Stopwatch;