import PropTypes from "prop-types";

const MovieCard2 = ({ imdbID, Poster, Title, Type, Year }) => {
	return (
		<section>
			<div className="flex flex-col text-center p-2 bg-cyan-900 rounded-xl shadow-md h-full justify-between">
				<p>{imdbID}</p>
				<img src={Poster} alt={Title} />
				<p className="text-2xl font-semibold">{Title}</p>
				<div className="flex justify-around text-lg font-mono">
					<span>{Type}</span>
					<span>{Year}</span>
				</div>
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
