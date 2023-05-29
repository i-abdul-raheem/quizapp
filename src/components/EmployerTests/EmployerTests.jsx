import { Box, Container, Grid } from "@mui/material";
import {
  Abstract,
  Diagrammatic,
  Numerical,
  Situational,
  TestImage,
} from "../../assets";
import { DARKWHITE, QNA, TestCard } from "../../utils";

export const EmployerTests = () => {
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
    <Box sx={{ background: DARKWHITE }}>
      <Container maxWidth="lg">
        <QNA
          question={"Employer Tests"}
          answers={[
            "Individual employers will use their own combination of aptitude tests as part of their assessment process. Click any link below to find out more about that organisation’s psychometric tests and practice some free examples. Or check out all of our employer tests.",
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
    </Box>
  );
};
