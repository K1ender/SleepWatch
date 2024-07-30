import { memo } from "react";
import Button from "../Button/Button";

const BottomBar = memo(() => {
	return (
		<div className="bg-white bottom-0 rounded h-[67px] mb-5 flex items-center justify-evenly w-[96%] md:w-11/12">
			<Button
				variants={{
					style: "primary",
				}}
			>
				Dashboard
			</Button>
		</div>
	);
});

export default BottomBar;
