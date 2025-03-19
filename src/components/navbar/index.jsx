import "./style.scss";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="logo">
          <h1>LOGO</h1>
        </div>

        <ul>
          <Link to={"/learning-centers"}>
            <li>Centers</li>
          </Link>
          <li>Profession</li>
          <li>Regions</li>
          <Link to={"/resource"}>
            <li>Resources</li>
          </Link>
        </ul>
        <div className="buttons">
          <Link to={"/auth"}>
            <button>Sign UP</button>
          </Link>
          <Link to={'/auth'}>
          <button>Log In</button>
          </Link>
        </div>
        <React.Fragment>
          <Button onClick={openDrawer} className="button-drawer">
            <i class="fa-solid fa-bars"></i>
          </Button>
          <Drawer open={open} onClose={closeDrawer} className="p-4 ">
            <div className="drawer">
              <ul className="smUl">
                <Link to={"/learning-centers"}>
                  <li>Centers</li>
                </Link>
                <li>Profession</li>
                <li>Regions</li>
                <Link to={"/resource"}>
                  <li>Resources</li>
                </Link>
              </ul>
              <div className="buttons sm-buttons mx-6">
                <button>Sign UP</button>
                <button>Log IN</button>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}
