import React, { useState, useEffect } from "react";

const Seasons = () => {
	const [seasons, setSeasons] = useState();

	useEffect(() => {
		getSeasonData();
	}, []);

	const getSeasonData = async () => {
		try {
			const url = "http://localhost:3001/seasons";
			const response = await fetch(url);
			const responseJSON = await response.json();
			setSeasons(responseJSON.response);
			console.log(responseJSON.response);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<ol className="nav-links">
			{Array.isArray(seasons) &&
				seasons.map((season, index) => <li key={index}>{season}</li>)}
		</ol>
	);
};

export default Seasons;
