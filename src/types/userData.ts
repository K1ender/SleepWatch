export type UserData = {
	username: string;
	checks: Check[];
	sleepQuality: number;
	level: number;
	exp: number;
	lastCheck: number;
};

export type Check = {
	id: number;
	startSleep: number;
	endSleep: number;
	mood: Mood;
};

export enum Mood {
	asAlways = 0,
	badly = 1,
	better = 2,
}
