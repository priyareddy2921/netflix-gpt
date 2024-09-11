import { useSelector } from "react-redux";
import VideoBackgound from "./VideoBackgound";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  //   console.log(id);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgound movieId={id} />
    </div>
  );
};

export default MainContainer;
