import { Box, Container } from "@mui/material";
import { OfferContainer } from "../../pages/Landing/elements";
import {
  BLUE,
  H4White,
  H5White,
  H6White,
  OfferCardAdvanced,
  OfferCardBasic,
} from "../../utils";

export const Offers = () => {
  return (
    <Box sx={{ background: BLUE, padding: "2rem 1rem" }}>
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", padding: "2rem 1rem" }}
      >
        <H5White>Join today</H5White>
        <H4White>Choose a plan and start practising</H4White>
        <H6White>Immediate access. Cancel anytime.</H6White>
      </Container>
      <OfferContainer maxWidth="md">
        <OfferCardBasic />
        <OfferCardAdvanced />
      </OfferContainer>
    </Box>
  );
};
