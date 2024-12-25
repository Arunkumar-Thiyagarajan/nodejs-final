import React, { useState } from "react";
import axios from "axios";

function URLShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/shorten-url", { longUrl });
      if (response.data.success) {
        setShortUrl(response.data.shortUrl);
        alert("URL shortened successfully!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error shortening URL");
    }
  };

  return (
    <div>
      <h2>Create Short URL</h2>
      <form onSubmit={handleShorten}>
        <div>
          <label>Enter Long URL</label>
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <h3>Shortened URL</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default URLShortener;
