import React from "react";
import styles from "./video_items.module.css";

const VideoItems = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
        className={styles.thumbnails}
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItems;
