import { Box, Container, Typography } from "@mui/material";
import { LaptopGirl } from "../../assets";
import { AllTests, Footer, Layout } from "../../components";
import { DARKWHITE, ORANGE, useIsMobileView, WHITE } from "../../utils";

export const Dashboard = () => {
  const isMobileView = useIsMobileView();
  return (
    <Layout style={{ background: DARKWHITE }}>
      <Box sx={{ background: WHITE }}>
        <Container maxWidth="xl" sx={{ padding: "1rem" }}>
          <Typography variant="h4">👋 Hello, Abdul Raheem</Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ padding: "2rem 1rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundImage: "linear-gradient(to right, #161830, #0394CE)",
            color: "#fff",
            padding: "50px 2rem",
            borderRadius: "20px",
            flexDirection: isMobileView ? "column" : "row",
          }}
        >
          <Box>
            <Typography variant="h4" mb={3}>
              Improve your score by up to 42% in just two weeks
            </Typography>
            <Typography variant="h5">
              <span style={{ color: ORANGE, fontSize: "28px" }}>Upgrade</span>{" "}
              and enjoy full access to every test and your personal dashboard
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              style={{
                position: isMobileView ? "relative" : "absolute",
                bottom: -50,
                right: -50,
              }}
              src={LaptopGirl}
              width={350}
              alt=""
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "2rem 1rem 0 1rem" }}>
        <Typography variant="h4">All Tests</Typography>
      </Container>
      <AllTests />
      <Footer />
    </Layout>
  );
};
