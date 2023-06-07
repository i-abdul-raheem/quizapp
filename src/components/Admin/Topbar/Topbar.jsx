import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Sidenav } from "../Sidenav";
import { Logout } from "@mui/icons-material";

export default function Topbar({ action }) {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 99 }}>
      <AppBar position="static">
        <Toolbar>
          <Sidenav action={action} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">
            <Logout />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
