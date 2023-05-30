import { Box, Container, Typography } from "@mui/material";
import { TestImage } from "../../assets";
import { PrimaryButton } from "../../utils";

export const SuccessStory = () => {
  return (
    <Box sx={{ background: "#F7F7F7" }}>
      <Container
        maxWidth={"lg"}
        sx={{
          padding: "4rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "20px",
          rowGap: "20px",
          flexDirection: { md: "column", lg: "row" },
        }}
      >
        <img style={{ width: "100%" }} src={TestImage} alt="Home Hero" />
        <Box sx={{ width: "100%", padding: { sm: "2rem 1rem", lg: "2rem" } }}>
          <Typography
            variant="h5"
            mb={1}
            sx={{ display: "block", width: "520px" }}
          >
            The tests were well suited to the job that I’ve applied for. They
            are easy to do and loads of them.
          </Typography>
          <Typography
            variant="p"
            mb={3}
            sx={{ display: "block", width: "520px" }}
          >
            Sophie used Practice Aptitude Tests to help pass her aptitude tests
            for Deloitte.
          </Typography>
          <PrimaryButton>START YOUR SUCCESS STORY</PrimaryButton>
        </Box>
      </Container>
    </Box>
  );
};
