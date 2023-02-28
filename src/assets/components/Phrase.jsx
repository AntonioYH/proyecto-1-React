import React from "react";

const Phrase = ({ text }) => {
	return (
		<p className="card__p">
			{text.quote} <hr />
			<b>
				<i>{text.author}</i>
			</b>
		</p>
	);
};

export default Phrase;
