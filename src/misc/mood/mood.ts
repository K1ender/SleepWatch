import { Mood } from "../../types/userData";

import happyMood from "../../assets/moods/mood-happy-svgrepo-com.svg";
import neutralMood from "../../assets/moods/mood-neutral-svgrepo-com.svg";
import sadMood from "../../assets/moods/mood-sad-svgrepo-com.svg";

export function getMood(mood: Mood) {
	if (mood === Mood.asAlways) {
		return neutralMood;
	} else if (mood === Mood.badly) {
		return sadMood;
	}
	return happyMood;
}
