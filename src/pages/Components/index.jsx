import { Box, Typography } from "@mui/material";
import { Questions } from "../../assets";
import { TestImage } from "../../assets/jpg";
import { Navbar } from "../../components";
import {
  BLUE,
  H2,
  H1,
  H3,
  H4,
  H5,
  H6,
  PrimaryButton,
  SecondaryButton,
  TestCard,
  TalentCard,
  Reviews,
  H1White,
  H2White,
  H3White,
  H4White,
  H5White,
  H6White,
  IDPCard,
} from "../../utils";
import { truncateString } from "../../utils/utils";

export function Components() {
  return (
    <Box sx={{ background: BLUE }}>
      <Typography variant="h2">Card</Typography>
      <Navbar />
      <hr />
      <Typography variant="h1">Components</Typography>
      <Typography variant="h2">Buttons</Typography>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <hr />
      <Typography variant="h2">Typography</Typography>
      <H1>H1 Heading 1</H1>
      <H2>H2 Heading 2</H2>
      <H3>H3 Heading 3</H3>
      <H4>H4 Heading 4</H4>
      <H5>H5 Heading 5</H5>
      <H6>H6 Heading 6</H6>
      <H1White>H1White Heading 1</H1White>
      <H2White>H2White Heading 2</H2White>
      <H3White>H3White Heading 3</H3White>
      <H4White>H4White Heading 4</H4White>
      <H5White>H5White Heading 5</H5White>
      <H6White>H6White Heading 6</H6White>
      <hr />
      <Typography variant="h2">Card</Typography>
      <TestCard
        img={TestImage}
        title={"Sample Test Card"}
        tests={10}
        questions={2009}
      />
      <TalentCard />
      <IDPCard
        description={"Written by industry experts."}
        title={"1000s of practice questions"}
      >
        <Questions />
      </IDPCard>
      <Reviews
        review={truncateString(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam sint nesciunt enim veritatis blanditiis tempora, doloremque sit quis. Explicabo aut fugit expedita consequatur minima eaque, reprehenderit tempore nulla aliquid.",
          250
        )}
        image={TestImage}
        name="Abdul Raheem"
      />
      <hr />
    </Box>
  );
}
