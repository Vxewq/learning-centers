import { useEffect, useState } from "react";
import "./style.scss";
import { api } from "../../utils/axios";

export default function ResourcePage() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    api.get("/api/resources").then((res) => setResources(res.data.data));
  }, []);
  console.log(resources);
  return (
    <div className="container-resource">
      <div className="title">
        <h1>Resources</h1>
      </div>
      <div className="resources">
        {resources?.map((res) => {
          return (
            <div key={res.id} className="res">
              <h1>{res.description}</h1>
              {res.media.split(".").pop() === "mp4" ? (
                <i class="fa-solid fa-play icon"></i>
              ) : (
                <i class="fa-solid fa-book icon"></i>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
