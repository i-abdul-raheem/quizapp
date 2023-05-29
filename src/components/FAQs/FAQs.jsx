import { Container, Grid } from "@mui/material";
import { H3, QNA } from "../../utils";

export const FAQs = () => {
  const faqs = [
    {
      question: "How are aptitude tests scored?",
      answers: [
        "There are various scoring systems, but the two most common are raw score and comparative score. Raw score is when all your correct answers are summarized and displayed in percentage ratio. Comparative score is when your results are compared to the results of other people who took the test in your group.",
      ],
    },
    {
      question: "What are aptitude tests used for?",
      answers: [
        "Aptitude tests are used for the evaluation of a person’s cognitive skills and character profile. They are increasingly used in recruitment to help hiring managers streamline their applicants. It’s the efficiency and accuracy of aptitude testing compared with hiring methods like interviewing that has made them so popular.",
      ],
    },
    {
      question: "What do aptitude tests involve?",
      answers: [
        "Aptitude tests assess a person’s skills, abilities, professional attitude and personality traits. There are a whole range of aptitude tests and the challenges you’ll face will depend on each. They’ll involve a combination of numerical tests, verbal concepts, abstract thinking, field-specific reasoning problems (financial, mechanical etc), personality tests and others.",
      ],
    },
    {
      question: "What do aptitude tests measure?",
      answers: [
        "Aptitude tests measure a huge range of skills such as numerical aptitude, language comprehension and logical thinking. Different aptitude tests measure different aptitudes and employers specifically hand-pick aptitude tests to reveal the traits they’re looking for. Aptitude tests in the financial industry will be totally different to those in healthcare.",
      ],
    },
  ];
  return (
    <>
      <Container
        sx={{ padding: "2rem 1rem", textAlign: "center" }}
        maxWidth="lg"
      >
        <H3>FAQS</H3>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {faqs.map((i, index) => (
            <Grid key={index} item lg={6} md={12}>
              <QNA question={i.question} answers={i.answers} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
