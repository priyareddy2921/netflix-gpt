import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[150px] max-w-[150px] max-h-70 w-64 h-70 rounded-lg hover:scale-110 transition-transform duration-200 ease-in-out">
      <img alt="Movie Card" src={IMAGE_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
