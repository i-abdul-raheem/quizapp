import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
  Avatar,
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
  Button,
  Rating,
} from "@mui/material";
import { FooterTc } from "../assets";

export const ORANGE = "#F36A4A";
export const DARKORANGE = "#D2573A";
export const BLUE = "#0394CE";
export const WHITE = "#FFFFFF";
export const DARKWHITE = "#F0F0F0";
export const TEXT_PRIMARY = "#222222";
export const TEXT_SECONDARY = "#777777";
export const PURPLE = "#1B1C40";

export const PrimaryButton = styled("button")({
  color: WHITE,
  backgroundColor: ORANGE,
  transition: "0.6s",
  border: "none",
  padding: "1rem 1.6rem",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: 5,
  marginRight: "1rem",
  "&:hover": {
    backgroundColor: DARKORANGE,
    transition: "0.6s",
  },
});

export const SecondaryButton = styled("button")({
  color: TEXT_PRIMARY,
  backgroundColor: WHITE,
  transition: "0.6s",
  border: "none",
  padding: "1rem 1.6rem",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: 5,
  marginRight: "1rem",
  "&:hover": {
    backgroundColor: DARKWHITE,
    transition: "0.6s",
  },
});

export const H1 = styled(Typography)({
  fontSize: "4rem",
});

export const H2 = styled(Typography)({
  fontSize: "3.5rem",
});

export const H3 = styled(Typography)({
  fontSize: "3rem",
});

export const H4 = styled(Typography)({
  fontSize: "2.5rem",
});

export const H5 = styled(Typography)({
  fontSize: "2rem",
});

export const H6 = styled(Typography)({
  fontSize: "1.5rem",
});

export const H1White = styled(Typography)({
  color: WHITE,
  fontSize: "4rem",
});

export const H2White = styled(Typography)({
  color: WHITE,
  fontSize: "3.5rem",
});

export const H3White = styled(Typography)({
  color: WHITE,
  fontSize: "3rem",
});

export const H4White = styled(Typography)({
  color: WHITE,
  fontSize: "2.5rem",
});

export const H5White = styled(Typography)({
  color: WHITE,
  fontSize: "2rem",
});

export const H6White = styled(Typography)({
  color: WHITE,
  fontSize: "1.5rem",
});

export const TestCard = ({ img, title, tests, questions }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 220 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box mb={1} sx={{ display: "flex" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "0 14px 0 0", borderRight: "1px solid #ddd" }}
          >
            {tests} tests
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "0 14px" }}
          >
            {questions} questions
          </Typography>
        </Box>
        <Rating name="read-only" value={5} readOnly />
      </CardContent>
    </Card>
  );
};

export const TalentCard = () => {
  return (
    <Box
      sx={{
        width: 345,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1.6rem 1rem",
        rowGap: "20px",
        borderRadius: "5px",
        background: "#23253D",
      }}
    >
      <img style={{ width: 160 }} src={FooterTc} alt="Footer TC" />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          color: WHITE,
        }}
      >
        Recruiting Talent?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: WHITE,
        }}
      >
        Our partner Neuroworx makes it simple to assess your candidates quickly
        and accurately.
      </Typography>
    </Box>
  );
};

export const IDPCard = ({ children, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1.6rem 1rem",
        rowGap: "20px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      {children}
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          color: WHITE,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: WHITE,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export const Qoutes = () => {
  return (
    <svg class="h-24 w-24 opacity-25" viewBox="0 0 40 40" width={"75px"}>
      <path
        d="M30.216 9H35c-2.591 4.338-4.385 8.474-5.282 12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226 13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382 12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237 12.674 9z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export const Reviews = ({ review, image, name }) => {
  return (
    <Box
      sx={{
        width: 345,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1.6rem 1rem",
        rowGap: "20px",
        borderRadius: "5px",
        background: "#1B1C40",
      }}
    >
      <Box sx={{ color: "#545570" }}>
        <Qoutes />
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: WHITE,
        }}
      >
        {review}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          columnGap: "20px",
        }}
      >
        <Avatar alt="Remy Sharp" src={image} />
        <Typography
          variant="body2"
          sx={{
            color: WHITE,
          }}
        >
          {name || "Untitled"}
        </Typography>
      </Box>
    </Box>
  );
};

export const QNA = ({ question, answers }) => {
  return (
    <Box
      sx={{
        padding: "2rem 1rem",
      }}
    >
      <H5 mb={3}>{question}</H5>
      {answers.map((answer, index) => (
        <Typography variant="body2" mb={2} key={index}>
          {answer}
        </Typography>
      ))}
    </Box>
  );
};

export const OfferCardBasic = () => {
  return (
    <Box
      sx={{
        background: WHITE,
        borderRadius: "5px",
        width: "100%",
        boxShadow: "-10px 7px 20px #555",
      }}
    >
      <Box
        sx={{
          background: DARKWHITE,
          width: "100%",
          padding: "1rem",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        BASIC
      </Box>
      <Box
        sx={{
          background: WHITE,
          width: "100%",
          padding: "1rem",
        }}
      >
        <span style={{ padding: "1rem", fontSize: "32px", fontWeight: 700 }}>
          $0
        </span>
        <List sx={{ padding: "2rem 0" }} dense={true}>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Access to free tests" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Basic performance tracking" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Solutions & explanations" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Tips and resources" />
          </ListItem>
        </List>
        <Button
          sx={{
            width: "100%",
            padding: "1rem 1.6rem",
            fontSize: "20px",
            color: TEXT_PRIMARY,
            background: "#D2D6DC",
            "&:hover": { background: "#E5E7EB" },
          }}
          variant="contained"
        >
          Free
        </Button>
      </Box>
    </Box>
  );
};

export const OfferCardAdvanced = () => {
  return (
    <Box
      sx={{
        background: WHITE,
        borderRadius: "5px",
        width: "100%",
        boxShadow: "-10px 7px 20px #555",
      }}
    >
      <Box
        sx={{
          background: DARKWHITE,
          width: "100%",
          padding: "1rem",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        PRO
      </Box>
      <Box
        sx={{
          background: WHITE,
          width: "100%",
          padding: "1rem",
        }}
      >
        <span style={{ padding: "1rem", fontSize: "32px", fontWeight: 700 }}>
          $49{" "}
          <sup style={{ fontSize: "16px", color: TEXT_SECONDARY }}>a month</sup>
        </span>
        <List sx={{ padding: "2rem 0" }} dense={true}>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="30 Numerical reasoning tests" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="30 Verbal reasoning tests" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="30 Diagrammatic reasoning tests" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="30 Situational judgement tests" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="34 Publisher packages e.g. Watson Glaser" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="251 Employer packages e.g. HSBC" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="29 Extra packages e.g Mechanical" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard performance tracking" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Full solutions and explanations" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: BLUE }} />
            </ListItemIcon>
            <ListItemText primary="Tips, tricks, guides and resources" />
          </ListItem>
        </List>
        <Button
          sx={{
            width: "100%",
            padding: "1rem 1.6rem",
            fontSize: "20px",
          }}
          variant="contained"
        >
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  );
};
