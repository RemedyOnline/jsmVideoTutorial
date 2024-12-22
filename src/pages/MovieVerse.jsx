import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=65b57874";
// 'https://via.placeholder.com/400'

const MovieVerse = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const fetchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const movieData = await response.json();

		console.log("Movie data === ", movieData.Search);
		setMovies(movieData.Search);
	};

	useEffect(() => {
		fetchMovies("Spiderman");
	}, []);

	return (
		<section>
			<section className="h-full w-full bg-slate-600 text-slate-200 p-5 space-y-10">
				<div>
					<h1 className="text-center text-2xl md:text-4xl font-bold font-mono">
						MovieVerse
					</h1>
					<p className="text-sm md:text-xl my-2 italic text-center">
						A whole universe of movies at your fingertips
					</p>
				</div>
				<div className="flex justify-center items-center relative">
					<input
						type="search"
						className="bg-slate-700 rounded-full px-4 py-2 sm:py-2.5 md:py-3 md:px-5 lg:w-1/2 md:1/2 w-3/4 shadow-md"
						placeholder="Search for any movie of your choice"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Search
						className="absolute right-14 sm:right-20 md:right-28 lg:right-[335px] transform translate-y-0 w-12  text-white "
						size={20}
						onClick={() => fetchMovies(searchTerm)}
					/>
				</div>
				<div className="container">
					{movies?.length > 0 ? (
						<div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 gap-10">
							{movies.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									Year={movie.Year}
									Poster={movie.Poster}
									Type={movie.Type}
									Title={movie.Title}
								/>
							))}
						</div>
					) : (
						<div>No movies found</div>
					)}
				</div>
			</section>
		</section>
	);
};

export default MovieVerse;
