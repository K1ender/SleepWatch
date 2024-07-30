import { memo, useState } from "react";
import Button from "../Button/Button";
import type { UserData } from "../../types/userData";
import { Link } from "react-router-dom";

const Sidebar = memo(
	({
		setSelectedDate,
		selectedDate,
		userData,
	}: {
		setSelectedDate: (value: number) => void;
		userData: UserData;
		selectedDate: number;
	}) => {
		const [isMenuOpened, setIsMenuOpened] = useState(false);

		return (
			<div
				className={`h-full bg-[#3C3C3C] min-w-fit ${isMenuOpened ? "min-w-1/12 min-md:w-1/6" : ""} max-w-48 flex flex-col py-4 px-4 gap-5 rounded-[15px]`}
			>
				<Button
					onClick={() => {
						setIsMenuOpened(!isMenuOpened);
					}}
					variants={{ style: "primary", type: "icon" }}
				>
					<img width={32} height={32} src="/menu.svg" alt="menu icon" />
				</Button>

				<div
					className={`${isMenuOpened && userData.checks?.length ? "" : "hidden"} flex gap-2 flex-col`}
				>
					{userData.checks.toReversed().map((value) => {
						return (
							<Button
								onClick={() => setSelectedDate(value.id)}
								key={value.id}
								variants={{
									style: `${value.id === selectedDate ? "primary" : "secondary"}`,
								}}
							>
								{new Date(value.endSleep).toLocaleDateString()}
							</Button>
						);
					})}
				</div>
				<Link to="/dashboard/create">
					<Button
						className="w-full"
						variants={{ style: "primary", type: "icon" }}
					>
						+
					</Button>
				</Link>
			</div>
		);
	},
);

export default Sidebar;
