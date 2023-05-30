import { Box, Rating, Typography } from "@mui/material";
import { HomeHero } from "../../assets";
import { CustomContainer } from "../../pages/Landing/elements";
import { BLUE, PrimaryButton, SecondaryButton } from "../../utils";

export const SingleTestHero = () => {
  return (
    <Box sx={{ background: BLUE }}>
      <CustomContainer maxWidth="xl">
        <img style={{ width: "100%" }} src={HomeHero} alt="Home Hero" />
        <Box sx={{ width: "100%", padding: { sm: "2rem 1rem", lg: "2rem" } }}>
          <Typography
            variant="h3"
            mb={1}
            sx={{ display: "block", width: "520px" }}
          >
            Numerical Reasoning
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              columnGap: "20px",
              marginBottom: 1,
            }}
          >
            <Rating name="read-only" value={5} readOnly />
            <Typography variant="h6">17 tests | 199 questions</Typography>
          </Box>
          <Typography
            mb={3}
            variant="p"
            sx={{ display: "block", width: "520px" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            saepe, minima amet doloribus consectetur odit inventore minus dolor
            fugit excepturi perferendis esse velit repellat ipsam debitis ipsum
            adipisci quisquam? Ut?
          </Typography>
          <Box>
            <PrimaryButton>Buy tests</PrimaryButton>
            <SecondaryButton>Free test</SecondaryButton>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};
