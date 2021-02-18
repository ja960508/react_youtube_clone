import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        src={`https://www.youtube.com/embed/${video.id}`}
        title="youtubeVideoPlayer"
        frameBorder="0"
        className={styles.video}
        width="100%"
        height="500px"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h2>{video.snippet.channelTitle}</h2>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
