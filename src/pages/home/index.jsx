import { Input } from "@material-tailwind/react";
import "./style.scss";
import photo from "./assets/showcase.png";
import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
export default function Home() {
  const [findcenter, setName] = useState("");
  useEffect(() => {
    api.get("https://your-api.com/api/learning-centers/search", {
      params: {
        name: "Najot Talim",
      },
    }).then(res => console.log(res.data.data));
  }, []);
  return (
    <div className="home-page">
      <div className="container-showcase">
        <div className="showcase">
          <h2>find center near to you house</h2>
          <h1>Education Courses</h1>
          <a href="#centers">
            <button className="btn">Learning Centers</button>
          </a>
        </div>
      </div>

      <div className="container-centers">
        <div className="title">
          <h1>Top Centers</h1>
        </div>
        <div id="centers" className="centers">
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
          <div className="center">
            <div className="photo">
              <img src="https://taplink.st/a/e/7/8/a/9856a9.jpg?1" alt="" />
            </div>
            <div className="info">
              <h1>Najot Talim</h1>
              <p>branches : 1</p>
              <button className="about-btn">about</button>
            </div>
          </div>
        </div>
        <button className="more-btn">more</button>
      </div>

      <div className="container-courses">
        <div className="title">Popular Courses</div>
        <div className="courses">
          <div className="course">
            <h1>Front-End</h1>
            <i class="fa-solid fa-laptop bg"></i>
          </div>
          <div className="course">
            <h1>Front-End</h1>
            <i class="fa-solid fa-laptop bg"></i>
          </div>
          <div className="course">
            <h1>Front-End</h1>
            <i class="fa-solid fa-laptop bg"></i>
          </div>
          <div className="course">
            <h1>Front-End</h1>
            <i class="fa-solid fa-laptop bg"></i>
          </div>
        </div>
        <button className="more-btn">more</button>
      </div>

      <div className="container-search">
        <div className="title">
          <h1>
            Already know where you want to learn? <br /> Find It
          </h1>
        </div>
        <div className="input">
          <input type="text" placeholder="learning center" />
          <button className="search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
