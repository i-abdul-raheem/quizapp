import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FAQsSection,
  Footer,
  Layout,
  Offers,
  ReviewsSection,
  SingleTestHero,
  SocialLinks,
} from "../../components";
import { SuccessStory } from "../../components/SuccessStory";
import { BLUE } from "../../utils";

export const SingleTest = () => {
  return (
    <Layout>
      <SingleTestHero />
      <Container maxWidth="lg" sx={{ padding: "4rem 1rem" }}>
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <h3>What is a Korn Ferry Assessment?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium harum error, perspiciatis, qui repellendus nesciunt
              accusantium non deserunt, optio illo reprehenderit modi id
              voluptatibus saepe? Dolores minima exercitationem asperiores
              placeat?
            </p>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box
              sx={{
                background: "#F4F4F4",
                padding: "2rem",
                border: "1px solid #aaa",
              }}
            >
              <Typography
                variant="h5"
                mb={2}
                sx={{ display: "block", width: "520px" }}
              >
                More Tests
              </Typography>
              <Typography
                variant="h5"
                mb={1}
                sx={{ display: "block", width: "520px", fontSize: "18px" }}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Link
                    key={i}
                    style={{
                      color: BLUE,
                      display: "block",
                      marginBottom: 10,
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    More Tests
                  </Link>
                ))}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SuccessStory />
      <FAQsSection />
      <SocialLinks />
      <ReviewsSection />
      <Offers />
      <Footer />
    </Layout>
  );
};
