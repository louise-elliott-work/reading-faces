import React from "react";

const StopwatchButtons = (props) => {
	const StartButton = (
		<div className="stopwatchButton"
			onClick={props.handleStart}>
			Stop
		</div>
	);
	const ResetButton = (
        <div className="stopwatchButton"
            onClick={props.handleReset}>
            Start again
        </div>
	);

	return (
		<div className="stopwatchButton">
			<div>{props.active ? ResetButton : StartButton}</div>
		</div>
	);
}

export default StopwatchButtons;