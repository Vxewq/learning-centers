import "./style.scss";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  MenuHandler,
  Menu,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="container-navbar">
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
        </Link>

        <ul>
          <Link to={"/learning-centers"}>
            <li>Centers</li>
          </Link>
          <Link to={"/resource"}>
            <li>Resources</li>
          </Link>
          <Menu>
            <MenuHandler>
              <Button className="btn" variant="outlined">
                Proffesions
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Computer Science</MenuItem>
              <MenuItem>Frontend</MenuItem>
              <MenuItem>Backend</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button className="btn bg">Regions</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Tashkent</MenuItem>
              <MenuItem>Samarqand</MenuItem>
              <MenuItem>Xorazm</MenuItem>
            </MenuList>
          </Menu>
        </ul>
        <div className="buttons">
          <Link to={"/auth"}>
            <button>Sign UP</button>
          </Link>
          <Link to={"/auth"}>
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

                <Link to={"/resource"}>
                  <li>Resources</li>
                </Link>
                <Menu>
                  <MenuHandler>
                    <Button className="btn" variant="outlined">
                      Proffesions
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Computer Science</MenuItem>
                    <MenuItem>Frontend</MenuItem>
                    <MenuItem>Backend</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="btn bg">Regions</Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Tashkent</MenuItem>
                    <MenuItem>Samarqand</MenuItem>
                    <MenuItem>Xorazm</MenuItem>
                  </MenuList>
                </Menu>
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
