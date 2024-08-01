import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import { useUserStore } from "../store/user";
import { Mood } from "../types/userData";

const CreateSleep = () => {
	const parseTime = useCallback((timeString: string) => {
		const [hours, minutes] = timeString.split(":").map(Number);
		const date = new Date();
		date.setHours(hours);
		date.setMinutes(minutes);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date;
	}, []);

	const [asleep, setAsleep] = useState("");
	const [awake, setAwake] = useState("");

	const navigate = useNavigate();

	const [isSameDate, setIsSameDate] = useState(false);

	const { addSleep, user } = useUserStore();

	if (user.lastCheck + 864000000 >= Date.now()) {
		return (
			<div className="text-white flex h-full w-full items-center justify-center text-center text-3xl flex-col gap-16">
				<div>You already added check</div>
				<Button variants={{ style: "primary" }}>
					<Link to={"/dashboard"}>Back to dashboard</Link>
				</Button>
			</div>
		);
	}

	return (
		<form className="h-full flex flex-col items-center w-full justify-center">
			<label className="text-white" htmlFor="asleep">
				When did you fall asleep?
			</label>
			<input
				required
				value={asleep}
				onChange={(e) => setAsleep(e.target.value)}
				id="asleep"
				type="time"
			/>
			<label className="text-white mt-2 flex gap-2 text-sm">
				<input
					checked={isSameDate}
					onChange={() => {
						setIsSameDate(!isSameDate);
					}}
					type="checkbox"
				/>
				Is this the same day?
			</label>

			<label className="text-white mt-4" htmlFor="awake">
				When did you wake up?
			</label>
			<input
				required
				value={awake}
				onChange={(e) => setAwake(e.target.value)}
				id="awake"
				type="time"
			/>
			<Button
				onClick={() => {
					addSleep({
						startSleep:
							parseTime(asleep).getTime() - (isSameDate ? 0 : 86400000),
						endSleep: parseTime(awake).getTime(),
						mood: Mood.asAlways,
						id: user.checks.length + 1,
					});
					navigate("/dashboard");
				}}
				className="mt-4"
				variants={{ style: "primary" }}
			>
				Add
			</Button>
		</form>
	);
};

export default CreateSleep;
