import {
  Email,
  Facebook,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeHero, TestImage } from "../../assets";
import { Footer, Layout, Offers, ReviewsSection, SingleTestHero } from "../../components";
import { SuccessStory } from "../../components/SuccessStory";
import { BLUE, PrimaryButton } from "../../utils";

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
      <Container maxWidth={"lg"} sx={{ padding: "4rem 1rem" }}>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6} sx={{ width: "100%" }} mb={3}>
            <Typography variant="h5" mb={2}>
              What are the Korn Ferry competencies?
            </Typography>
            <Typography variant="p" mb={2}>
              Korn Ferry has developed four dimensions of leadership and talent:
              Competencies: observed behaviours and skills Experience: how
              previous roles relate to future roles Traits: personality,
              aptitudes and qualities Drivers: motivations and what engages a
              candidate
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ width: "100%" }} mb={3}>
            <Typography variant="h5" mb={2}>
              What are the Korn Ferry competencies?
            </Typography>
            <Typography variant="p" mb={2}>
              Korn Ferry has developed four dimensions of leadership and talent:
              Competencies: observed behaviours and skills Experience: how
              previous roles relate to future roles Traits: personality,
              aptitudes and qualities Drivers: motivations and what engages a
              candidate
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ width: "100%" }} mb={3}>
            <Typography variant="h5" mb={2}>
              What are the Korn Ferry competencies?
            </Typography>
            <Typography variant="p" mb={2}>
              Korn Ferry has developed four dimensions of leadership and talent:
              Competencies: observed behaviours and skills Experience: how
              previous roles relate to future roles Traits: personality,
              aptitudes and qualities Drivers: motivations and what engages a
              candidate
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ width: "100%" }} mb={3}>
            <Typography variant="h5" mb={2}>
              What are the Korn Ferry competencies?
            </Typography>
            <Typography variant="p" mb={2}>
              Korn Ferry has developed four dimensions of leadership and talent:
              Competencies: observed behaviours and skills Experience: how
              previous roles relate to future roles Traits: personality,
              aptitudes and qualities Drivers: motivations and what engages a
              candidate
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ width: "100%" }} mb={3}>
            <Typography variant="h5" mb={2}>
              What are the Korn Ferry competencies?
            </Typography>
            <Typography variant="p" mb={2}>
              Korn Ferry has developed four dimensions of leadership and talent:
              Competencies: observed behaviours and skills Experience: how
              previous roles relate to future roles Traits: personality,
              aptitudes and qualities Drivers: motivations and what engages a
              candidate
            </Typography>
          </Grid>
        </Grid>
      </Container>
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
      <ReviewsSection />
      <Offers />
      <Footer />
    </Layout>
  );
};
