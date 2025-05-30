import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon
} from "@heroicons/react/24/solid";

import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(
            open === value
                ? 0
                : value
        );
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul
            className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"></ul>
    );

    return (
        <div className="w-full">
            <Navbar
                className="fixed top-0 left-0 right-0 z-50 h-max max-w-full rounded-none px-2 py-1 lg:px-8 lg:py-1 shadow-md border-b border-gray-100"
                style={{
                    background: 'linear-gradient(to right, #0E95A9, #01EDF766)',
                    backdropFilter: 'blur-sm'
                }}>
                <div className="flex items-center justify-between text-black">
                    <div className="flex items-center">
                        <IconButton
                            variant="text"
                            size="lg"
                            onClick={openDrawer}
                            className="flex items-center justify-center">
                            {
                                isDrawerOpen
                                    ? (<XMarkIcon className="h-8 w-8 stroke-2"/>)
                                    : (<Bars3Icon className="h-8 w-8 stroke-2"/>)
                            }
                        </IconButton>
                        <img 
                            src="src\assets\img\icon\LOGO MUED Design System.png    " 
                            alt="Logo" 
                            className="ml-12 h-10 cursor-pointer" 
                        />
                        <div>
                        <Typography  href="#" className="ml-11 cursor-pointer text-xl font-[DM-Serif-Display] font-bold text-black whitespace-nowrap ">
                         MUED Design System
                        </Typography>
                        </div>
                    </div>

                    <form className="w-[740px] ml-90">
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500"/>
                            </div>
                            <input
                                type="search"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search the MUED Design System"
                                required="required"/>
                        </div>
                    </form>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1"></div>
                    </div>
                </div>
            </Navbar>

            <Drawer open={isDrawerOpen} onClose={closeDrawer} className="shadow-lg">
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4 shadow-xl">
                    <div className="mb-2 flex items-center gap-4 p-4">
                        
                        <Typography variant="h5" color="blue-gray">
                            Sidebar
                        </Typography>
                    </div>

                    <List>
                        <Accordion
                            open={open === 1}
                            icon={<ChevronDownIcon
                            strokeWidth = {
                                2.5
                            }
                            className = {
                                `mx-auto h-4 w-4 transition-transform ${open === 1
                                    ? "rotate-180"
                                    : ""}`
                            }
                            />}></Accordion>

                        <ListItem>
                            Design
                            <ListItemSuffix>
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            Component
                        </ListItem>
                        <ListItem>
                            Development
                        </ListItem>
                        <ListItem>
                            Guidelines
                        </ListItem>
                        <ListItem>
                            Language
                        </ListItem>
                    </List>
                </Card>
            </Drawer>
        </div>
    );
}

export default StickyNavbar;
