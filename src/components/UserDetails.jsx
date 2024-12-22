import PropTypes from "prop-types";

const UserDetails = ({
	userName = "Login",
	age = null,
	address,
	subject = "No subject...",
	message = "No message available...",
}) => {
	return (
		<section>
			<ul className="list-disc">
				<li>UserName: {userName}</li>
				{age && <li>Age: {age}</li>}
				{address ? <li>Address: {address}</li> : <li>Not available</li>}
				{subject && <li>Subject: {subject}</li>}
				{message && <li>Message: {message}</li>}
			</ul>
		</section>
	);
};

UserDetails.propTypes = {
	userName: PropTypes.string,
	age: PropTypes.number,
	address: PropTypes.string,
	subject: PropTypes.string,
	message: PropTypes.string,
};

export default UserDetails;
