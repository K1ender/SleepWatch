import { memo } from "react";
import { compile, type Variants } from "../../misc/classVariants";

const getClass = compile("text-center", {
	variants: {
		style: {
			primary:
				"bg-primary text-black rounded px-2 py-1 hover:bg-green-500 transition-colors",
			secondary:
				"bg-white text-black rounded px-2 py-1 hover:bg-zinc-200 transition-colors",
		},
		type: {
			icon: "p-0 h-[44px] w-[44px] rounded-[9px] text-center flex items-center justify-center w-11 h-11",
		},
		size: {
			big: "px-6 py-4",
		},
	},
});

const Button = memo(
	({
		variants,
		children,
		className,
		...rest
	}: {
		variants: Variants<typeof getClass>;
	} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
		return (
			<button
				{...rest}
				className={`${getClass(variants)} ${className}`}
				type="button"
			>
				{children}
			</button>
		);
	},
);

export default Button;
