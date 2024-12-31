import PropTypes from "prop-types";

const MovieCard2 = ({ imdbID, Poster, Title, Type, Year }) => {
	return (
		<section>
			<div className="flex flex-col text-center p-2 bg-cyan-700 rounded-xl shadow-md h-full justify-start items-center relative group max-w-md">
				<p>{imdbID}</p>
				<img src={Poster} alt={Title} className="rounded-lg h-[250px]" />
				<p className="text-lg font-semibold text-cyan-950">{Title}</p>
				<div className="flex justify-around text-lg font-mono">
					{/* <span>{Type}</span> */}
					<span className="text-cyan-950">{Year}</span>
				</div>
				<button className="absolute bottom-3 right-3 hidden group-hover:block p-1 rounded-full bg-cyan-800 transition-all duration-500 ease-in-out">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#083344"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-eye"
					>
						<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
						<circle cx="12" cy="12" r="3" />
					</svg>
				</button>
			</div>
		</section>
	);
};

MovieCard2.propTypes = {
	imdbID: PropTypes.number,
	Poster: PropTypes.string,
	Year: PropTypes.string,
	Title: PropTypes.string,
	Type: PropTypes.string,
};

export default MovieCard2;
