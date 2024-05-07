import React, { useState, useEffect } from "react";

const NepalTime = () => {
	const [formattedTime, setFormattedTime] = useState("");

	const calculateNepalTime = () => {
		const now = new Date();
		const utcOffsetMinutes = 5 * 60 + 45; // UTC offset for Nepal is UTC+5:45

		// Calculate the time in Nepal using the local time and UTC offset
		const nepalTime = new Date(now.getTime() + utcOffsetMinutes);

		// Format the time in 12-hour format with AM/PM
		let hours = nepalTime.getHours();
		const minutes = nepalTime.getMinutes().toString().padStart(2, "0");
		const ampm = hours >= 12 ? "pm" : "am";
		hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format and handle midnight

		// Format the time as "h:mm a Kathmandu, Nepal"
		const timeString = `${hours}:${minutes} ${ampm} Ktm, Nepal`;

		setFormattedTime(timeString);
	};

	useEffect(() => {
		calculateNepalTime();
		const interval = setInterval(calculateNepalTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col text-base font-bold leading-snug ">
			<p className="mb-2">Local Time</p>
			<p className="text-darkWhite text-hover">{formattedTime}</p>
		</div>
	);
};

export default NepalTime;
