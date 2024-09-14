import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackgound = ({ movieId }) => {
  //   console.log(movieId);
  useVideoTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailers);
  //   console.log(movieId);

  //   console.log(trailerVideo);
  return (
    <div className="w-screen bg-black">
      <iframe
        className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgound;
