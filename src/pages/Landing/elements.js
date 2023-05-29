import { Box, Container, styled } from "@mui/material";
import { useIsMobileView, WHITE } from "../../utils";

export const CustomContainer = styled(Container)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: isMobileView ? "column" : "row",
    columnGap: 20,
    rowGap: 20,
    color: WHITE,
  };
});

export const Left = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  rowGap: "20px",
  padding: "2rem 1rem",
});

export const OfferContainer = styled(Container)(() => {
  const isMobileView = useIsMobileView();
  return {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "20px",
    flexDirection: isMobileView ? "column" : "row",
  };
});
