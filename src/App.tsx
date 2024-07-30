import { Link } from "react-router-dom";
import Button from "./Components/Button/Button";

function App() {
	return (
		<>
			<div className="text-white h-full flex flex-col items-center justify-center text-center">
				<h1 className="text-4xl font-semibold text-center">Sleep watch</h1>
				<h3 className="mt-2">Fix your sleep by progressing like in the game</h3>
				<Link to={`/dashboard`}>
					<Button
						variants={{ style: "primary" }}
						className="mt-4"
						type="button"
					>
						Get started
					</Button>
				</Link>
			</div>
		</>
	);
}

export default App;
