import { Container } from "@mui/material";
import { QNA } from "../../utils";

export const HowToPrepare = () => {
  return (
    <Container maxWidth="lg">
      <QNA
        question={"How do I prepare for aptitude tests?"}
        answers={[
          "The best way to prepare for aptitude tests is to practice them. The more you practice aptitude tests, the better you’ll get and the higher results you’ll achieve. You can start with these aptitude test sample questions and answers.",
          "Practice isn’t just about taking test after test though. You need to practice smartly, define which assessments you’ll need to master, reveal which areas you need to work on and follow expert advice to help you improve.",
          "If you’d like further practice you can try our free aptitude tests for online practice or our aptitude test pdf if you’d prefer to practice offline.",
          "Practice smartly and measure your performance to show your results improve",
          "We set up Practice Aptitude Tests to help people practice and we’re proud to say that we’ve now helped over 9 million people all over the world.",
          "As well as a huge vault of online assessments, we’ve also created an aptitude test resource hub full of articles and videos to help you improve. Get started with our top aptitude test tips.",
        ]}
      />
    </Container>
  );
};
