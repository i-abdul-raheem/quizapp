import { Container } from "@mui/material";
import Colors from "../Colors/Colors";
import { Landing } from "../Landing/Landing";
import Settings from "../Settings/Settings";
import Topbar from "../Topbar/Topbar";
import queryString from "query-string";
import { useState } from "react";

export const Main = () => {
  const { active } = queryString.parse(window.location.search);
  const [tab, setTab] = useState("dashboard");
  return (
    <>
      <Topbar action={setTab} />
      <Container maxWidth="lg" sx={{ marginTop: 5, marginBottom: 5 }}>
        {(active === "landing" || tab === "landing") && <Landing />}
        {(active === "colors" || tab === "colors") && <Colors />}
        {(active === "settings" || tab === "settings") && <Settings />}
      </Container>
    </>
  );
};
