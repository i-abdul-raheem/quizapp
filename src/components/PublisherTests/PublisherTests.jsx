import { Container, Grid } from "@mui/material";
import { QNA, TestCard } from "../../utils";
import {
  Abstract,
  Diagrammatic,
  Numerical,
  Situational,
  TestImage,
} from "../../assets";

export const PublisherTests = () => {
  const testsList = [
    {
      title: "Numerical Reasoning",
      img: Numerical,
      questions: 480,
      tests: 30,
    },
    {
      title: "Verbal Reasoning",
      img: TestImage,
      questions: 450,
      tests: 30,
    },
    {
      title: "Situational Judgement",
      img: Situational,
      questions: 180,
      tests: 30,
    },
    {
      title: "Diagramatic Reasoning",
      img: Diagrammatic,
      questions: 300,
      tests: 30,
    },
    {
      title: "Abstract Reasoning",
      img: Abstract,
      questions: 140,
      tests: 15,
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <QNA
          question={"Publisher Tests"}
          answers={[
            "If you’re due to take an aptitude test produced by a specific test publisher, we’ve got you covered. Practice free tests based on the style of those publishers via any of the links below, and check out all our publisher tests here.",
          ]}
        />
      </Container>
      <Container sx={{ padding: "2rem 1rem" }} maxWidth="xl">
        <Grid container spacing={2}>
          {testsList.map((i, index) => (
            <Grid
              style={{ width: "100%" }}
              key={index}
              item
              xl={3}
              lg={4}
              md={6}
              sm={12}
            >
              <TestCard
                img={i.img}
                questions={i.questions}
                tests={i.tests}
                title={i.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
