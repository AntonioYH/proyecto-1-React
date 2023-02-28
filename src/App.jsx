import React, { useState } from "react";
import "./App.css";
import phrase from "./assets/phrases.json";
import Button from "./assets/components/Button";
import Phrase from "./assets/components/Phrase";

function App() {
	//? values for backgroundColor when loading/reloading the web page
	const newFirstColor = Math.floor(Math.random() * 360);
	const newSecondColor = Math.floor(Math.random() * 100);
	const newThirdColor = Math.floor(Math.random() * 100);

	const [index, setindex] = useState(
		Math.floor(Math.random(phrase.length) * 100)
	);

	const [firstColor, setFirstColor] = useState(newFirstColor);
	const [secondColor, setSecondColor] = useState(newSecondColor);
	const [thirdColor, setThirdColor] = useState(newThirdColor);

	//? setting a random index when clicking on the button "Try your luck"
	const increaseIndex = () => {
		const newIndex = Math.floor(Math.random(phrase.length) * 100);
		setindex(newIndex);
		// console.log(newIndex);
	};

	//? setting new random colors when click on the button "Try your luck"
	const changeBackgroundColor = () => {
		const newFirstColor = Math.floor(Math.random() * 360);
		const newSecondColor = Math.floor(Math.random() * 100);
		const newThirdColor = Math.floor(Math.random() * 100);

		setFirstColor(newFirstColor);
		setSecondColor(newSecondColor);
		setThirdColor(newThirdColor);
	};

	return (
		<div
			className="background"
			style={{
				backgroundColor: `hsl(${firstColor}deg, ${secondColor}%, ${thirdColor}%)`,
			}}
		>
			<div className="card-container">
				<div
					className="button-container"
					onClick={() => {
						increaseIndex();
						changeBackgroundColor();
					}}
				>
					<Button />
				</div>
				<Phrase text={phrase[index]} />
			</div>
		</div>
	);
}

export default App;
