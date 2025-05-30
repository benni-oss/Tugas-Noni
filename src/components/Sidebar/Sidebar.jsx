import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  CogIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const menuItems = [
    {
      id: 1,
      title: "Design",
      icon: PresentationChartBarIcon,
      subItems: [
        "Design Tokens",
        "Color Palette",
        "Typography",
        "Icons",
        "Layout Grid"
      ]
    },
    {
      id: 2,
      title: "Components",
      icon: CodeBracketIcon,
      subItems: [
        "Buttons",
        "Forms",
        "Navigation",
        "Cards",
        "Modals"
      ]
    }
  ];

  const simpleMenuItems = [
    { title: "Development", icon: CogIcon },
    { title: "Guidelines", icon: DocumentTextIcon },
    { title: "Language", icon: LanguageIcon }
  ];

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer} >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="shadow-lg">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <Typography variant="h5" color="blue-gray">
              MUED Design System
            </Typography>
          </div>
          
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search components..."
            />
          </div>
          
          <List>
            {/* Accordion Menu Items */}
            {menuItems.map((item) => (
              <Accordion
                key={item.id}
                open={open === item.id}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === item.id}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.id)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <item.icon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      {item.title}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {item.subItems.map((subItem, index) => (
                      <ListItem key={index}>
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        {subItem}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            ))}

            <hr className="my-2 border-blue-gray-50" />

            {/* Simple Menu Items */}
            {simpleMenuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemPrefix>
                  <item.icon className="h-5 w-5" />
                </ListItemPrefix>
                {item.title}
              </ListItem>
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
}

export default SidebarWithBurgerMenu;
