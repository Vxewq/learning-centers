import "./style.scss";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

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
          <li>Centers</li>
          <li>Profession</li>
          <li>Regions</li>
          <li>Resources</li>
        </ul>
        <div className="buttons">
          <button>Sign UP</button>
          <button>Log IN</button>
        </div>
        <React.Fragment>
          <Button onClick={openDrawer} className="button-drawer"><i class="fa-solid fa-bars"></i></Button>
          <Drawer open={open} onClose={closeDrawer} className="p-4 ">
            <div className="drawer">
            <ul className="smUl">
              <li>Centers</li>
              <li>Profession</li>
              <li>Regions</li>
              <li>Resources</li>
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
