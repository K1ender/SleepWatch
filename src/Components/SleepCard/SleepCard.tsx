import { memo } from "react";
import type { Check } from "../../types/userData";

import moonicon from "../../assets/moonicon.svg";

const SleepCard = memo(({ check }: { check: Check | undefined }) => {
	if (!check) {
		return (
			<div className="text-white h-full w-full text-3xl flex items-center justify-center">
				Date not found
			</div>
		);
	}

	const sleepDurationInMilliseconds = check.endSleep - check.startSleep;
	const sleepDurationInHours = sleepDurationInMilliseconds / (1000 * 60 * 60);

	return (
		<div className="flex items-center flex-col w-full pt-10 text-center">
			<img src={moonicon} alt="moon icon" />
			<p className="flex md:gap-4 text-white md:text-2xl mt-10 flex-col md:flex-row text-lg">
				<span>
					{new Date(check.startSleep).toLocaleDateString("us", {
						day: "2-digit",
						month: "2-digit",
						year: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						hour12: false,
					})}
				</span>
				-
				<span>
					{new Date(check.endSleep).toLocaleDateString("us", {
						day: "2-digit",
						month: "2-digit",
						year: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						hour12: false,
					})}
				</span>
			</p>

			<p className="text-white mt-4">
				You slept {Math.round(sleepDurationInHours)} hours 👍
			</p>
		</div>
	);
});

export default SleepCard;
