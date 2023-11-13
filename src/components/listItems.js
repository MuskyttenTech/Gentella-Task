import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";

import BarChartIcon from "@mui/icons-material/BarChart";

import HouseIcon from "@mui/icons-material/House";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";

import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import PestControlIcon from "@mui/icons-material/PestControl";

import DropDown from "./collapse";
import Collapse from "@mui/material/Collapse";

const HomeData = [
  {
    label: "Dashboard",
  },
  {
    label: "Dashboard1",
  },
  {
    label: "Dashboard2",
  },
];
const FormData = [
  {
    label: "General Form",
  },
  {
    label: "Advanced Components",
  },
  {
    label: "Form Validation",
  },
  {
    label: "Form Wizard",
  },
  {
    label: "Form Upload",
  },
  {
    label: "Form Buttons",
  },
];
const UIElement = [
  {
    label: "General Element",
  },
  {
    label: "Media Gallery",
  },
  {
    label: "Typography",
  },
  {
    label: "Icons",
  },
  {
    label: "Glyphicons",
  },
  {
    label: "Widgets",
  },
  {
    label: "Invoice",
  },
  {
    label: "Inbox",
  },
  {
    label: "calendar",
  },
];

const Tables = [
  {
    label: "Tables",
  },
  {
    label: "Tables Dynamic",
  },
];
const DataPresentation = [
  {
    label: "Chart JS",
  },
  {
    label: "Chart JS2",
  },
  {
    label: "Moris JS",
  },
  {
    label: "ECharts",
  },
  {
    label: "Other Charts",
  },
];

const AdditionalPage = [
  {
    label: "E-commerce",
  },
  {
    label: "Projects",
  },
  {
    label: "Project Detail",
  },
  {
    label: "Contacts",
  },
  {
    label: "Profile",
  },
];
const ExtrasError = [
  {
    label: "403 Error",
  },
  {
    label: "404 Error",
  },
  {
    label: "500 Error",
  },
  {
    label: "Plain Page",
  },
  {
    label: "Login Page",
  },
  {
    label: "Pricing Tables",
  },
];
const MainListItems = ({ open }) => {
  const [isOpen, setIsOpen] = React.useState({
    home: false,
    forms: false,
    uIElements: false,
    tables: false,
    dataPresentation: false,
    additionalPages: false,
    extras: false,
    landingPage: false,
  });
 const handleCollapse = (item) => {
  setIsOpen((prevState) => {
    // Set all items to false
    const updatedState = Object.fromEntries(
      Object.keys(prevState).map((key) => [key, false])
    );
    // Set the clicked item to true
    updatedState[item] = true;
    return updatedState;
  });
};







  return (
    <>
      <ListItemButton
        onClick={() => handleCollapse("home")}
        sx={{
          borderRight: open && isOpen["home"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <HouseIcon sx={{ color: "#E7E7E7", marginBottom: "6px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Home"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["home"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["home"] ? 2 : 0,
          borderRight: isOpen["home"] ? "5px solid #1ABB9C" : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={HomeData} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("forms")}
        sx={{
          borderRight: open && isOpen["forms"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <EditIcon sx={{ color: "#E7E7E7", marginBottom: "6px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Forms"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["forms"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["forms"] ? 2 : 0,
          borderRight: isOpen["forms"] ? "5px solid #1ABB9C" : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={FormData} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("uIElements")}
        sx={{
          borderRight:
            open && isOpen["uIElements"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <DesktopMacOutlinedIcon
            sx={{ color: "#E7E7E7", marginBottom: "6px" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="UI Elements"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["uIElements"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["uIElements"] ? 2 : 0,
          borderRight: isOpen["uIElements"] ? "5px solid #1ABB9C" : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={UIElement} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("tables")}
        sx={{
          borderRight: open && isOpen["tables"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <CalendarViewMonthOutlinedIcon
            sx={{ color: "#E7E7E7", marginBottom: "6px" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Tables"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["tables"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["tables"] ? 2 : 0,
          borderRight: isOpen["tables"] ? "5px solid #1ABB9C" : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={Tables} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("dataPresentation")}
        sx={{
          borderRight:
            open && isOpen["dataPresentation"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <BarChartIcon sx={{ color: "#E7E7E7", marginBottom: "6px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Data Presentation"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["dataPresentation"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["dataPresentation"] ? 2 : 0,
          borderRight: isOpen["dataPresentation"]
            ? "5px solid #1ABB9C"
            : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={DataPresentation} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("additionalPages")}
        sx={{
          borderRight:
            open && isOpen["additionalPages"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <PestControlIcon sx={{ color: "#E7E7E7", marginBottom: "6px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Additional Pages"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["additionalPages"]}
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["additionalPages"] ? 2 : 0,
          borderRight: isOpen["additionalPages"] ? "5px solid #1ABB9C" : "none",
        }}
        timeout="auto"
        unmountOnExit
      >
        <DropDown steps={AdditionalPage} />
      </Collapse>

      <ListItemButton
        onClick={() => handleCollapse("extras")}
        sx={{
          borderRight: open && isOpen["extras"] ? "5px solid #1ABB9C" : "none",
        }}
      >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <DashboardIcon sx={{ color: "#E7E7E7", marginBottom: "6px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Extras"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
      <Collapse
        in={open && isOpen["extras"]}
        timeout="auto"
        sx={{
          paddingLeft: 2,
          paddingRight: isOpen["extras"] ? 2 : 0,
          borderRight: isOpen["extras"] ? "5px solid #1ABB9C" : "none",
        }}
        unmountOnExit
      >
        <DropDown steps={ExtrasError} />
      </Collapse>

      <ListItemButton onClick={() => handleCollapse("landingPage")} >
        <ListItemIcon sx={{ marginBottom: "0", marginRight: "4px" }}>
          <LaptopMacOutlinedIcon
            sx={{ color: "#E7E7E7", marginBottom: "6px" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Landing Page"
          sx={{
            color: "#E7E7E7",
            marginBottom: "6px",
            marginLeft: "-24px",
            opacity: open ? 1 : 0,
          }}
          primaryTypographyProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Helvetica Neue",
            },
          }}
        />
        <ExpandMoreOutlinedIcon
          sx={{ color: "#ECF0F1", opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </>
  );
};

export default MainListItems;