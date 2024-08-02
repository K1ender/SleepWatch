import { memo } from "react";
import type { Check } from "../../types/userData";

import moonicon from "../../assets/moonicon.svg";
import {
	formatDateSleepCard,
	getSleepDuration,
} from "../../misc/dates/formatDate";
import { getMood } from "../../misc/mood/mood";

const SleepCard = memo(({ check }: { check: Check | undefined }) => {
	if (!check) {
		return (
			<div className="text-white h-full w-full text-3xl flex items-center justify-center">
				Date not found
			</div>
		);
	}

	return (
		<div className="flex items-center flex-col w-full pt-10 text-center px-4">
			{/* TODO: Somehow make img white */}

			<img src={moonicon} alt="moon icon" />
			<p className="flex md:gap-4 text-white md:text-2xl mt-10 flex-col md:flex-row text-lg">
				<span>{formatDateSleepCard(check.startSleep)}</span>-
				<span>{formatDateSleepCard(check.endSleep)}</span>
			</p>

			<p className="text-white mt-4">
				You slept {getSleepDuration(check)} hours 👍
			</p>

			<p className="mt-4 text-white text-center">
				When you woke up, you felt like:
			</p>
			<img width={64} src={getMood(check.mood)} alt="Mood" />
		</div>
	);
});

export default SleepCard;
