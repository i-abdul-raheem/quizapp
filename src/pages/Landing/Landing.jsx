import { Box } from "@mui/material";
import { HomeHero } from "../../assets";
import {
  EmployerTests,
  Footer,
  Layout,
  FAQs,
  Offers,
  PublisherTests,
  ReviewsSection,
  HowToPrepare,
  Traits,
  AllTests,
  QNASection,
} from "../../components";
import {
  BLUE,
  H4White,
  H6White,
  PrimaryButton,
  SecondaryButton,
} from "../../utils";
import { CustomContainer, Left } from "./elements";

export const Landing = () => {
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
      <QNASection />
      <AllTests />
      <Traits />
      <HowToPrepare />
      <ReviewsSection />
      <PublisherTests />
      <EmployerTests />
      <FAQs />
      <Offers />
      <Footer />
    </Layout>
  );
};
