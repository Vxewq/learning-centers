import { useEffect, useState } from "react";
import "./style.scss";
import { api } from "../../utils/axios";
import { Button } from "@material-tailwind/react";

export default function ResourcePage() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    api.get("/api/resources").then((res) => setResources(res.data.data));
  }, []);

  const handleDownload = async (url, filename) => {
    try {
      const response = await api.get(url, { responseType: "blob" });
      const blob = new Blob([response.data]);
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = filename || "resource-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="container-resource">
      <div className="title">
        <h1>Resources</h1>
      </div>
      <div className="resources">
        {resources?.map((res) => (
          <div key={res.id} className="res">
            <Button
              className="button"
              onClick={() => handleDownload(res.media, `resource-${res.id}`)}
            >
              Download
            </Button>
            <h1>{res.description}</h1>
            {res.media.split(".").pop() === "mp4" ? (
              <i className="fa-solid fa-play icon"></i>
            ) : (
              <i className="fa-solid fa-book icon"></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
