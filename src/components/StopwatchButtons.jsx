import React from "react";
import './StopwatchButtons.css';

const StopwatchButtons = (props) => {
	const StartButton = (
		<div className="stopButton"
			onClick={props.handleStart}>
			Stop
		</div>
	);
	const ResetButton = (
        <div className="startButton"
            onClick={props.handleReset}>
            Restart
        </div>
	);

	return (
		<div>
			<div>{props.active ? ResetButton : StartButton}</div>
		</div>
	);
}

export default StopwatchButtons;