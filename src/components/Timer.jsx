import React from "react";
import './Timer.css';

const Timer = (props) => {

	return (
		<>
			<span className="digits">
				{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
			</span>
			<span className="digits">
				{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
			</span>
		</>
	);
}

export default Timer;