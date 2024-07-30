import { create } from "zustand";
import type { Check, UserData } from "../../types/userData";
import { persist } from "zustand/middleware";

type Store = {
	user: UserData;
	addSleep: (sleep: Check) => void;
};

export const useUserStore = create<Store>()(
	persist(
		(set, get) => ({
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
					state.user.lastCheck = Date.now();
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
