import {
  Button,
  Tooltip,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import "./style.scss";
import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import TooltipInfo from "../../components/tooltip";
import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function LearningCenters() {
  let [lc, setLc] = useState([]);
  useEffect(() => {
    api.get("/api/learning-centers").then((res) => {
      setLc(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  const [value, setValue] = React.useState("top");

  return (
    <div className="container-lc">
      <div className="catalog-lc">
        <div className="title">
          <h1>Learning Centers</h1>
          
        </div>
        <div className="centers">
          {lc?.map((center) => {
            return (
              <Link to={`/center-page/${center.id}`}>
                <div key={center.id} className="center">
                  <Tooltip
                    content={
                      <TooltipInfo
                        name={center.name}
                        fields={center.fields.length}
                        branches={center.branchNumber}
                        rating={
                          center.comments?.length > 0
                            ? Math.floor(
                                center.comments.reduce(
                                  (sum, c) => sum + parseFloat(c.star),
                                  0
                                ) / center.comments.length
                              )
                            : 0
                        }
                      />
                    }
                    placement="right-start"
                  >
                    <div className=" w-80 main-info">
                      <div className="img">
                        <img
                          width={300}
                          height={300}
                          src={"https://taplink.st/a/e/7/8/a/9856a9.jpg?1"}
                          alt=""
                        />
                      </div>
                      <h1>{center.name}</h1>
                      <p>branches : {center.branchNumber}</p>
                    </div>
                  </Tooltip>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
