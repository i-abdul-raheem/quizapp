import { Box, Container, Grid, Link } from "@mui/material";
import { BLUE, H6, PURPLE, TalentCard } from "../../utils";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <>
      <Box sx={{ background: PURPLE, padding: "4rem 1rem" }}>
        <Container maxWidth="lg">
          <Grid sx={{width: "100%"}} container spacing={2}>
            <Grid sx={{width: "100%"}} item lg={4} md={6} sm={12}>
              <Box>
                <H6 sx={{ color: BLUE }}>Top Aptitude Tests</H6>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 1
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 2
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 3
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 4
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 5
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 6
                </Link>
              </Box>
            </Grid>
            <Grid sx={{width: "100%"}} item lg={4} md={6} sm={12}>
              <Box>
                <H6 sx={{ color: BLUE }}>Our Tests</H6>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 1
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 2
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 3
                </Link>
                <Link
                  sx={{ color: "#fff", display: "block", padding: "10px 4px" }}
                >
                  Link 4
                </Link>
              </Box>
            </Grid>
            <Grid sx={{width: "100%"}} item lg={4} md={6} sm={12}>
              <TalentCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterBottom />
    </>
  );
};
