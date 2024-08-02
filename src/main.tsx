import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateSleep from "./dashboard/CreateSleep.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
		},
		{
			path: "/dashboard",
			element: <Dashboard />,
		},
		{
			path: "/dashboard/create",
			element: <CreateSleep />,
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	},
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster />
	</React.StrictMode>,
);
