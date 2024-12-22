import { useEffect, useState } from "react";
import UserDetails from "../components/UserDetails";

const Tutorials = () => {
	const [count, setCount] = useState(0);
	const [evenCounter, setEvenCounter] = useState(2);
	const [darkMode, setDarkMode] = useState(false);
	const name = "Michael Agyemang Prempeh";
	const isNameAvailable = true;

	const countIncrementor = () => {
		setCount((count) => count + 1);
	};

	const countDecrementor = () => {
		setCount((count) => count - 1);
	};

	const evenCountIncrementor = () => {
		setEvenCounter((currentValue) => currentValue + 2);
	};

	const themeSwitch = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		alert("Count = " + count);
	}, [count]); // dependency array...

	return (
		<section
			className={`h-full w-screen flex flex-col justify-start items-center space-y-5 ${
				darkMode ? "bg-slate-800 text-white" : "bg-slate-100 text-black"
			}`}
		>
			<div>
				<button
					onClick={themeSwitch}
					className={`text-2xl w-12 h-12 font-semibold rounded-full shadow-lg mb-5 text-center align-middle items-center justify-center flex mx-auto ${
						darkMode
							? "bg-slate-700 hover:bg-slate-900"
							: "bg-slate-300 hover:bg-slate-400"
					}`}
				>
					{darkMode ? "🌙" : "☀️"}
				</button>
				<div className="flex gap-5 items-center justify-center">
					<button
						onClick={countDecrementor}
						className="w-10 h-10 font-semibold text-lg rounded-lg bg-slate-300"
					>
						➖
					</button>
					<p className="text-xl font-semibold font-mono">count is {count}</p>
					<button
						onClick={countIncrementor}
						className="w-10 h-10 font-semibold text-lg rounded-lg bg-slate-300"
					>
						➕
					</button>
				</div>
				<div className="mt-5 text-lg font-medium">
					<h2>
						Hello{" "}
						<span className="text-blue-700">
							{isNameAvailable ? name : "no name..."}
						</span>
					</h2>
					<p>The product of 6 and 8 is {6 * 8}</p>
				</div>
			</div>
			<UserDetails
				userName="Kofi"
				age={22}
				subject="Job Application"
				address="Lapaz, Accra"
				message="I need a job bro!"
			/>
			<UserDetails message="I'm hungry charleyy..." />
			<div className="flex gap-5 items-center justify-center">
				<p>Even counter - </p>
				<button
					onClick={() => setEvenCounter((currentValue) => currentValue - 2)}
					className="w-10 h-10 font-semibold text-lg rounded-lg bg-slate-300"
				>
					➖
				</button>
				<p>{evenCounter}</p>
				<button
					onClick={evenCountIncrementor}
					className="w-10 h-10 font-semibold text-lg rounded-lg bg-slate-300"
				>
					➕
				</button>
			</div>
		</section>
	);
};

export default Tutorials;
