import { Box } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children, style }) => {
  return (
    <Box sx={style}>
      <Navbar />
      {children}
    </Box>
  );
};
