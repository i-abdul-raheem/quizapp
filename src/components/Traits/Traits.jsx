import { Box, Container, Grid } from "@mui/material";
import { Alarm, Mind, Questions, TestTaken } from "../../assets";
import { BLUE, IDPCard } from "../../utils";

export const Traits = () => {
  const qualities = [
    {
      title: "1000s of practice questions",
      description: "Written by industry experts.",
      image: <Questions />,
    },
    {
      title: "Over 9 million practice tests taken",
      description: "We’ve used a lot of feedback.",
      image: <TestTaken />,
    },
    {
      title: "Practice tests anytime, anywhere",
      description: "On your mobile or computer.",
      image: <Alarm />,
    },
    {
      title: "Retake tests, improve your scores",
      description: "The surest way to success.",
      image: <Mind />,
    },
  ];
  return (
    <Box sx={{ background: BLUE }}>
      <Container sx={{ padding: "2rem 1rem" }} maxWidth="xl">
        <Grid container spacing={2}>
          {qualities.map((i, index) => (
            <Grid key={index} item xl={3} md={6} sm={12}>
              <IDPCard
                key={index}
                description={i?.description}
                title={i?.title}
              >
                {i?.image}
              </IDPCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
