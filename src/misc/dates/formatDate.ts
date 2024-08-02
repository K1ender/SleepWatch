import { Check } from "../../types/userData";

export function formatDateSleepCard(time: number) {
	return new Date(time).toLocaleDateString("en-us", {
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
}

export function formatDateSidebar(time: number) {
	return new Date(time).toLocaleDateString("en-us", {});
}

export function getSleepDuration(check: Check) {
	const sleepDurationInMilliseconds = check.endSleep - check.startSleep;
	const sleepDurationInHours = sleepDurationInMilliseconds / (1000 * 60 * 60);
	return Math.round(sleepDurationInHours);
}

export function parseTime(timeString: string) {
	const [hours, minutes] = timeString.split(":").map(Number);
	const date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);
	date.setSeconds(0);
	date.setMilliseconds(0);
	return date;
}

export function getStartSleep(asleep: string, isSameDate: boolean) {
	return parseTime(asleep).getTime() - (isSameDate ? 0 : 86400000);
}
