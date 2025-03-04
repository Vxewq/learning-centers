import { Button, Tooltip } from "@material-tailwind/react";
import "./style.scss";

export default function LearningCenters() {
  return (
    <div className="container-lc">
      <div className="catalog-lc">
        <div className="title">
          <h1>Learning Centers</h1>
        </div>
        <div className="centers">
          <div className="center">
            <Tooltip content={<>h1ll</>} placement="right-start">
              <div className=" w-80 main-info">
                <div className="img">
                  <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
                </div>
                <h1>Najot Talim</h1>
                <p>branches : 1</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="filter"></div>
    </div>
  );
}
