import { Container } from "@mui/material";
import Settings from "../Settings/Settings";
import Topbar from "../Topbar/Topbar";

export const Main = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg" sx={{ marginTop: 5, marginBottom: 5 }}>
        {/* <Colors /> */}
        <Settings />
      </Container>
    </>
  );
};
