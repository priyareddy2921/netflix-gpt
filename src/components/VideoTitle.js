const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-white text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-white text-lg text-gray p-4 w-15 m-4 rounded-lg hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="bg-opacity-50 bg-gray-500 text-lg text-white p-4 w-15 m-4 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
