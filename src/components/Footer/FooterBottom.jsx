import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Container, Grid, Link } from "@mui/material";

export const FooterBottom = () => {
  return (
    <Box
      sx={{
        background: "#090B1A",
        padding: "4rem 1rem",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={2} md={4} sm={6}>
            <Link sx={{ color: "#fff" }}>About</Link>
          </Grid>
          <Grid item lg={2} md={4} sm={6}>
            <Link sx={{ color: "#fff" }}>Terms of Service</Link>
          </Grid>
          <Grid item lg={2} md={4} sm={6}>
            <Link sx={{ color: "#fff" }}>Privacy Policy</Link>
          </Grid>
          <Grid item lg={2} md={4} sm={6}>
            <Link sx={{ color: "#fff" }}>Support</Link>
          </Grid>
          <Grid item lg={2} md={4} sm={6}>
            <Link sx={{ color: "#fff" }}>Recuriting?</Link>
          </Grid>
          <Grid
            item
            lg={2}
            md={4}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "14px",
              padding: "20px",
            }}
          >
            <Facebook />
            <Instagram />
            <Twitter />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
