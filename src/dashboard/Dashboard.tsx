import { useState } from "react";
import BottomBar from "../Components/BottomBar/BottomBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import SleepCard from "../Components/SleepCard/SleepCard";
import { useUserStore } from "../store/user";

const Dashboard = () => {
	const { user: userData } = useUserStore();

	const [selectedDate, setSelectedDate] = useState<number>(0);

	return (
		<div className="flex flex-col items-center h-full gap-6">
			<div className="bg-bg w-[96%] md:w-11/12 h-full mt-4 rounded-[15px] flex">
				<Sidebar
					selectedDate={selectedDate}
					userData={userData}
					setSelectedDate={setSelectedDate}
				/>
				{selectedDate ? (
					<SleepCard
						check={userData.checks?.find((value) => value.id === selectedDate)}
					/>
				) : null}
			</div>
			<BottomBar />
		</div>
	);
};

export default Dashboard;
