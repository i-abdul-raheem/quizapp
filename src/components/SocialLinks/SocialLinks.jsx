import { Email, Facebook, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

export const SocialLinks = () => {
  return (
    <Container maxWidth={"sm"} sx={{ padding: "4rem 1rem" }}>
      <Typography
        variant="h5"
        mb={3}
        sx={{ display: "block", textAlign: "center" }}
      >
        Enjoy what you’ve read? Let others know!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 4,
          fontSize: "32px",
        }}
      >
        <WhatsApp />
        <Facebook />
        <LinkedIn />
        <Twitter />
        <Email />
      </Box>
    </Container>
  );
};
