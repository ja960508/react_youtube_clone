import React from "react";
import VideoItems from "../video_items/video_items";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  console.log(videos);
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        console.log(video.id);
        return (
          <VideoItems
            video={video}
            key={video.id}
            onVideoClick={onVideoClick}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
