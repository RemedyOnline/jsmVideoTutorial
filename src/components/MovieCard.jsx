import PropTypes from "prop-types";

const MovieCard = ({ Year, Poster, Title, Type }) => {
	return (
		<>
			<div className="rounded-lg shadow-lg bg-slate-700 w-fit h-fit">
				<p>{Year}</p>
				<img
					src={Poster == "N/A" ? "https://via.placeholder.com/400" : Poster}
					alt={Title}
				/>
				<p>{Type}</p>
				<p>{Title}</p>
			</div>
		</>
	);
};

MovieCard.propTypes = {
	Type: PropTypes.string,
	Title: PropTypes.string,
	Poster: PropTypes.string,
	Year: PropTypes.string,
};

export default MovieCard;
