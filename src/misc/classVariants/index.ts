import { twMerge } from "tailwind-merge";

export type Settings = { variants: Record<string, Record<string, string>> };

export type Styles<T extends Settings> = {
	[Key in keyof T["variants"]]?: keyof T["variants"][Key];
};

export type Variants<T> = T extends (arg: infer type) => string ? type : T;

export function compile<T extends Settings>(
	defaultClasses: string,
	variants: T,
) {
	return (a: Styles<T>): string => {
		const stylesArray = [defaultClasses];
		for (const [key, value] of Object.entries(a)) {
			stylesArray.push(`${variants.variants[key][value]}`);
		}
		return twMerge(...stylesArray);
	};
}
