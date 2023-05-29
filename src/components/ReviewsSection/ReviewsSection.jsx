import { Box, Container, Grid } from "@mui/material";
import { PURPLE, Reviews } from "../../utils";

export const ReviewsSection = () => {
  const reviews = [
    {
      review:
        "I liked the tests. They had interesting questions and having to assess situations where you need to take strategic decisions which would impact the organization in the longer run is astounding.",
      image: undefined,
      name: "Ria Ashraf",
    },
    {
      review:
        "With their tests, I could get a better knowledge to ace the online assessment provided by the greatest companies in nearly all sectors. ",
      image: undefined,
      name: "Mohammed Mahmoud",
    },
    {
      review:
        "Practice Aptitude Tests is a very useful and thorough resource. It’s easy to use, you can search the relevant tests used by different employers and there are many different types of tests to choose from. Definitely my go-to for practising tests. ",
      image: undefined,
      name: "Ava Lee",
    },
    {
      review:
        "Questions were framed very well. Good level and standard is maintained. ",
      image: undefined,
      name: "Abhinav Telukunta",
    },
    {
      review:
        "This is so useful: there are loads of different tests and situations and the videos really help you improve, especially with the numerical ones which can be really hard! ",
      image: undefined,
      name: "Lucy Welford",
    },
    {
      review:
        "The tests I completed were perfect for helping me to improve my comprehension skills.",
      image: undefined,
      name: "Jay Wilkinson",
    },
  ];
  return (
    <Box sx={{ background: PURPLE }}>
      <Container sx={{ padding: "2rem 1rem" }} maxWidth="xl">
        <Grid container spacing={2}>
          {reviews.map((i, index) => (
            <Grid
              style={{ width: "100%" }}
              key={index}
              item
              xl={4}
              md={6}
              sm={12}
            >
              <Reviews
                image={i.image}
                name={i.name}
                review={i.review}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
