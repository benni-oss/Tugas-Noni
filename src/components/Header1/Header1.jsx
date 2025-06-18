import React from "react";
import {
  Navbar,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Collapse,
  Drawer,
  Card
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Header1() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [openGuide, setOpenGuide] = React.useState(false);
  const [openGlobal, setOpenGlobal] = React.useState(false);
  const [openComponents, setOpenComponents] = React.useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="w-full ">
      <Navbar
        className="fixed top-0 left-0 right-0 z-50 h-max max-w-full rounded-none px-2 py-1 lg:px-8 lg:py-1 shadow-md border-b border-gray-100 "
        style={{
          background: "linear-gradient(to right, #0692FF)",
          backdropFilter: "blur-sm"
        }}
      >
        <div className="flex items-center text-white">
          <img
            src="src/assets/img/icon/ui/logo.png"
            alt="Logo"
            className="ml-1 mr-1 h-10 cursor-pointer"
          />
          <div className="flex items-center justify-center drop-shadow-md">
            <div
              onClick={toggleDrawer}
              className="flex items-center justify-center"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
                filter: "drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.7))"
              }}
            >
              {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2" />
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-2" />
              )}
            </div>

            <div>
              <Typography
                href="#"
                className="ml-1 cursor-pointer  font-dm-serif text-white whitespace-nowrap"
              >
                MUED Design System
              </Typography>
            </div>
          </div>

          <form className="w-[740px] ml-90">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-1 ps-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search the MUED Design System"
                required
              />
            </div>
          </form>
        </div>
      </Navbar>

      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="z-[40] mt-10">
        <Card className="h-[calc(120vh-2rem)] flex flex-col w-full p-8 m-1">
          <List>
            {/* MUED Design Guide */}
            <ListItem
              onClick={() => setOpenGuide(!openGuide)}
              className="m-2  justify-between items-center cursor-pointer hover:bg-blue-50 transition rounded-md"
            >
              MUED Design Guide
              <ListItemSuffix>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openGuide ? "rotate-180" : ""
                  }`}
                />
              </ListItemSuffix>
            </ListItem>
            <Collapse open={openGuide}>
              <List className="pl-6 m-1">
                <Link to="/introduction"><ListItem  className="hover:text-blue-700 m-1"> Basic Introduction</ListItem></Link>
                <Link to="/values"><ListItem className="hover:text-blue-700 m-1">Design Values</ListItem></Link>
                <Link to="/innoinher"><ListItem className="hover:text-blue-700 m-1">Innovation and Inheritance</ListItem></Link>
              </List>
            </Collapse>

            {/* Global Style */}
            <ListItem
              onClick={() => setOpenGlobal(!openGlobal)}
              className="m-2 flex justify-between items-center cursor-pointer hover:bg-blue-50 transition rounded-md"
            >
              Global Style
              <ListItemSuffix>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openGlobal ? "rotate-180" : ""
                  }`}
                />
              </ListItemSuffix>
            </ListItem>
            <Collapse open={openGlobal}>
              <List className="pl-6 ">
                <Link to="/layout"><ListItem className="hover:text-blue-700 m-1">Layout</ListItem></Link>
                <Link to="/color"><ListItem className="hover:text-blue-700 m-1">Color</ListItem></Link>
               <Link to="/text"> <ListItem className="hover:text-blue-700 m-1">Text</ListItem></Link>
                <Link to="/icon"><ListItem className="hover:text-blue-700 m-1">Icon</ListItem></Link>
              </List>
            </Collapse>

            {/* Components */}
            <ListItem
              onClick={() => setOpenComponents(!openComponents)}
              className="m-2 flex justify-between items-center cursor-pointer hover:bg-blue-50 transition rounded-md"
            >
              Components
              <ListItemSuffix>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openComponents ? "rotate-180" : ""
                  }`}
                />
              </ListItemSuffix>
            </ListItem>
            <Collapse open={openComponents}>
              <List className="pl-6 ">
               <Link to="/stepbar"> <ListItem className="hover:text-blue-700 m-1">Step Bar</ListItem></Link>
              </List>
            </Collapse>

            {/* Others */}
          <Link to="/tools">  <ListItem className="m-2 text-black hover:bg-blue-50 transition rounded-md">
              Tools
            </ListItem></Link>
            <Link to="/contact"> <ListItem className="m-2 text-black hover:bg-blue-50 transition rounded-md">
              Contact Us
            </ListItem></Link>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}

export default Header1;
