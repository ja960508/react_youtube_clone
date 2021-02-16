import React from "react";
import VideoItems from "../video_items/video_items";
import styles from "./video_list.module.css";

const VideoList = ({ videos }) => {
  console.log(videos);
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItems video={video} key={video.id} />
      ))}
    </ul>
  );
};

export default VideoList;
