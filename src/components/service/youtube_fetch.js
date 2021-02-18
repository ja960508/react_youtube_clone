import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3`,
      params: {
        key: key,
      },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippnet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.items.map((data) => ({ ...data, id: data.id.videoId }));
 }

  async search(query) {
      const response = await this.youtube.get("search", {
          params: {
            part: "snippnet",
            maxResults: 25,
            q=query,
            type='video',
          }
      });
    return response.items.map((data) => ({ ...data, id: data.id.videoId }));
  }
}

export default Youtube;
