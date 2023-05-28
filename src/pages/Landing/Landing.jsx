import { Box, Container, Grid } from "@mui/material";
import {
  Abstract,
  Alarm,
  Diagrammatic,
  HomeHero,
  Mind,
  Numerical,
  Questions,
  Situational,
  TestImage,
  TestTaken,
} from "../../assets";
import { Layout } from "../../components";
import {
  BLUE,
  DARKWHITE,
  H3,
  H4White,
  H6White,
  IDPCard,
  PrimaryButton,
  PURPLE,
  QNA,
  Reviews,
  SecondaryButton,
  TestCard,
} from "../../utils";
import { CustomContainer, Left } from "./elements";

export const Landing = () => {
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
    <Layout>
      <Box sx={{ background: BLUE }}>
        <CustomContainer maxWidth="xl">
          <Left>
            <H4White>Practice Aptitude Tests</H4White>
            <H6White>#1 Aptitude Testing Platform</H6White>
            <Box>
              <PrimaryButton>Buy tests</PrimaryButton>
              <SecondaryButton>Free tests</SecondaryButton>
            </Box>
          </Left>
          <img style={{ width: "100%" }} src={HomeHero} alt="Home Hero" />
        </CustomContainer>
      </Box>
      <Container maxWidth="lg">
        {qna.map(({ question, answers }, index) => (
          <QNA question={question} answers={answers} key={index} />
        ))}
      </Container>
      <Container sx={{ padding: "2rem 1rem" }} maxWidth="xl">
        <Grid container spacing={2}>
          {testsList.map((i, index) => (
            <Grid key={index} item xl={3} lg={4} md={6} sm={12}>
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
      <Box sx={{ background: PURPLE }}>
        <Container sx={{ padding: "2rem 1rem" }} maxWidth="xl">
          <Grid container spacing={2}>
            {reviews.map((i, index) => (
              <Grid key={index} item xl={4} md={6} sm={12}>
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
            <Grid key={index} item xl={3} lg={4} md={6} sm={12}>
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
              <Grid key={index} item xl={3} lg={4} md={6} sm={12}>
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
    </Layout>
  );
};
