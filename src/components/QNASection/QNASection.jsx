import { Container } from "@mui/material";
import { QNA } from "../../utils";

export const QNASection = () => {
  const qna = [
    {
      question: "What is an aptitude test?",
      answers: [
        "An aptitude test is a way to measure a job candidate’s cognitive abilities, work behaviours, or personality traits. Aptitude tests will examine your numeracy, logic and problem-solving skills, as well as how you deal with work situations. They are a proven method to assess employability skills.",
        "Aptitude tests measure a range of skills such as numerical ability, language comprehension and logical reasoning.",
      ],
    },
    {
      question: "What are the different types of aptitude tests?",
      answers: [
        "There are a number of different types of aptitude test due to the range of cognitive capabilities and employer priorities. At Practice Aptitude Tests, we provide industry standard aptitude or psychometric tests for banking, accountancy, finance, law, engineering, business, marketing and vocational fields.",
        "The most commonly used are numerical reasoning tests, verbal reasoning tests, diagrammatic reasoning tests, situational judgement tests , mechanical reasoning tests and personality tests.",
      ],
    },
    {
      question: "Take a free practice aptitude test",
      answers: [
        "Try a free practice aptitude test from the 16 test types below to prepare for your psychometric tests. All our assessments are written by accredited industry experts and are designed to replicate real exams used by leading employers.",
        "Each has a strict time limit and at the end of the test you can view your score, benchmark and the full solutions to all the questions.",
      ],
    },
  ];
  return (
    <Container maxWidth="lg">
      {qna.map(({ question, answers }, index) => (
        <QNA question={question} answers={answers} key={index} />
      ))}
    </Container>
  );
};
