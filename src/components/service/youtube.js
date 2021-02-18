class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((data) => ({ ...data, id: data.id.videoId }));
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();

    return result.items.map((data) => ({ ...data, id: data.id.videoId }));
  }
}

export default Youtube;
