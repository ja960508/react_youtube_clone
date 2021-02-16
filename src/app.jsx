import { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAeJ4Ia_LbfYZfFUDBYmLtjH_bht4dYB7w",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((data) => ({ ...data, id: data.id.videoId }))
      )
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearchSubmit = (keyword) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyAeJ4Ia_LbfYZfFUDBYmLtjH_bht4dYB7w`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((data) => ({ ...data, id: data.id.videoId }))
      )
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Header handleSearchSubmit={handleSearchSubmit} />
      <VideoList videos={videos} />;
    </>
  );
}

export default App;
