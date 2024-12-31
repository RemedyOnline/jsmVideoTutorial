import { useEffect, useState } from "react";
import MovieCard2 from "../components/MovieCard2";
import { Search } from "lucide-react";

const API_URL = "http://www.omdbapi.com?apikey=65b57874";
// 'https://via.placeholder.com/400'

const MovieVerse2 = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const getMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`); // template strings
		const movieInfo = await response.json();

		console.log("Getting movie data... ", movieInfo.Search);
		setMovies(movieInfo.Search);
	};

	useEffect(() => {
		getMovies("Thor");
	}, []);

	return (
		<section className="bg-cyan-800">
			<div className=" h-full mx-auto my-auto items-center justify-start flex flex-col space-y-10 2xl:max-w-6xl">
				<div>
					<h1 className="text-center text-2xl md:text-4xl font-bold font-mono">
						MovieVerse
					</h1>
					<p className="text-sm md:text-xl my-2 italic text-center">
						A whole universe of movies at your fingertips
					</p>
				</div>
				<div className="w-1/2 bg-cyan-600 shadow-lg rounded-full py-1 px-5 flex gap-2 text-cyan-950 items-center">
					<input
						type="search"
						name="search"
						placeholder="Search for any movie..."
						id="search"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						className="w-full bg-transparent placeholder:text-cyan-950 py-2 outline-none"
					/>
					<Search className="" onClick={() => getMovies(searchValue)} />
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5">
					{movies?.length > 0 ? (
						movies.map((movie) => (
							<MovieCard2
								key={movie.imdbID}
								Year={movie.Year}
								Poster={movie.Poster}
								Title={movie.Title}
								Type={movie.Type}
							/>
						))
					) : (
						<div>No movies available...</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default MovieVerse2;
