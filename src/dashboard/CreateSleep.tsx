import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import { useUserStore } from "../store/user";
import { Mood } from "../types/userData";
import { getStartSleep, parseTime } from "../misc/dates/formatDate";

const CreateSleep = () => {
	const [asleep, setAsleep] = useState("");
	const [awake, setAwake] = useState("");

	const navigate = useNavigate();

	const [isSameDate, setIsSameDate] = useState(false);

	const { addSleep, user } = useUserStore();

	if (user.lastCheck + 86400000 >= Date.now()) {
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
						startSleep: getStartSleep(asleep, isSameDate),
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
