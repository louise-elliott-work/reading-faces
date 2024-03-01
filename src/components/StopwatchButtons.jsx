import React from "react";
import './StopwatchButtons.css';

const StopwatchButtons = (props) => {
	const StartButton = (
		<div className="stopwatchButton"
			onClick={props.handleStart}>
			Start
		</div>
	);
	const ResetButton = (
        <div className="stopwatchButton"
            onClick={props.handleReset}>
            Reset
        </div>
	);

	return (
		<div className="stopwatchButton">
			<div>{props.active ? ResetButton : StartButton}</div>
		</div>
	);
}

export default StopwatchButtons;