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

export function Sidenav() {
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
          { title: "Dashboard", icon: <SpaceDashboard /> },
          { title: "Landing Page", icon: <Home /> },
          { title: "Quizes", icon: <Quiz /> },
          { title: "Colors", icon: <ColorLens /> },
        ].map((i, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{i?.icon}</ListItemIcon>
              <ListItemText primary={i?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { title: "Settings", icon: <Settings /> },
          { title: "Logout", icon: <Logout /> },
        ].map((i, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
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
