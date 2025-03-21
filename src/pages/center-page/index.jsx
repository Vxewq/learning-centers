import { useParams } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { Rating } from "@material-tailwind/react";

export default function CenterPage() {
  const { id } = useParams();
  const [center, setCenter] = useState({});
  useEffect(() => {
    api
      .get(`/api/learning-centers/${id}`)
      .then((res) => setCenter(res.data.data));
  }, [id]);
  const stars =
    center.comments?.length > 0
      ? Math.floor(
          center.comments.reduce((sum, c) => sum + parseFloat(c.star), 0) /
            center.comments.length
        )
      : 0;

  return (
    <div className="container-center">
      <div className="center">
        <div className="top">
        <div className="title">
          <div className="image">
            <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
          </div>
          
          <div className="side-rating">
            <h1>
              {center.name} <br /> {center.region?.name}
            </h1>
            <Rating value={stars} readonly />
            <h2>{center.address}</h2>
          </div>
        </div>
        <div className="about">
          <div className="contact">
            <h1>contact number: </h1>
            <a href={`tel:${center.phoneNumber}`}>
              <h1 className="tel">{center.phoneNumber}</h1>
            </a>
          </div>
          <div className="fields">
            {center.fields?.map((field) => {
              return (
                <div className="field" key={field.name}>
                  <h1>{field.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <div className="comments">
          <h1 className="titlecom">Comments from other users:</h1>
          {center.comments?.map((com) => {
            return (
              <div className="comment">
                <Rating value={Math.floor(com.star)} readonly />
                <h1>{com.comment}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
