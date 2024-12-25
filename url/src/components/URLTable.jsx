import React, { useEffect, useState } from "react";
import axios from "axios";

function URLTable() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get("/api/all-urls");
        if (response.data.success) {
          setUrls(response.data.urls);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert("Error fetching URLs");
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h2>All URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.shortUrl}>
              <td>
                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                  {url.shortUrl}
                </a>
              </td>
              <td>{url.longUrl}</td>
              <td>{url.clickCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default URLTable;
