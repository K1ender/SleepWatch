import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Check, UserData } from "../../types/userData";

type Store = {
	user: UserData;
	addSleep: (sleep: Check) => void;
};

export const useUserStore = create<Store>()(
	persist(
		(set) => ({
			user: {
				exp: 0,
				level: 0,
				checks: [],
				sleepQuality: 0,
				username: "username",
				lastCheck: 0,
			},
			addSleep: (sleep: Check) => {
				set((state) => {
					state.user.checks.push(sleep);

					const lastCheckDay = new Date(Date.now());
					lastCheckDay.setHours(0);
					lastCheckDay.setMinutes(0);
					lastCheckDay.setSeconds(0);
					lastCheckDay.setMilliseconds(0);
					state.user.lastCheck = lastCheckDay.getTime();
					return {
						...state,
					};
				});
			},
		}),
		{
			name: "user-storage",
		},
	),
);
