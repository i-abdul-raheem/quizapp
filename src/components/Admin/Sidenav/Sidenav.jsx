import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ColorLens,
  Home,
  Logout,
  Quiz,
  Settings,
  SpaceDashboard,
  Widgets,
} from "@mui/icons-material";

export function Sidenav({ action }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            title: "Dashboard",
            icon: <SpaceDashboard />,
            action: () => action("dashboard"),
          },
          {
            title: "Landing Page",
            icon: <Home />,
            action: () => action("landing"),
          },
          { title: "Quizes", icon: <Quiz />, action: () => action("quizes") },
          {
            title: "Colors",
            icon: <ColorLens />,
            action: () => action("colors"),
          },
        ].map((i, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={i?.action}>
              <ListItemIcon>{i?.icon}</ListItemIcon>
              <ListItemText primary={i?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            title: "Settings",
            icon: <Settings />,
            action: () => action("settings"),
          },
          { title: "Logout", icon: <Logout />, action: () => action("logout") },
        ].map((i, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={i?.action}>
              <ListItemIcon>{i?.icon}</ListItemIcon>
              <ListItemText primary={i?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <Widgets sx={{ color: "#fff" }} />
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
