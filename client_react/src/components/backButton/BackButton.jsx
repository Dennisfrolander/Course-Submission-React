import "./backButton.css";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link to="/" className="btn back-home">
      Back Home
    </Link>
  );
};

export default BackButton;
