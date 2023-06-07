import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function createData(quetion, answer) {
  return { quetion, answer };
}

const rows = [
  createData("Primary Background", "#0394CE"),
  createData("Primary Button", "#F36A4A"),
  createData("Secondary Button", "#D2573A"),
  createData("Text Primary", "#222222"),
  createData("Text Secondary", "#777777"),
  createData("Review Background", "#1B1C40"),
];

export const Landing = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab label="Header" {...a11yProps(0)} />
          <Tab label="Top Questions" {...a11yProps(1)} />
          <Tab label="Bottom Questions" {...a11yProps(2)} />
          <Tab label="FAQs" {...a11yProps(3)} />
          <Tab label="Reviews" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
          Header
        </Typography>
        <Box
          sx={{
            background: "#fff",
            boxShadow: "1px 1px 10px #aaa",
            padding: "2rem",
            borderRadius: 2,
            mb: 5,
          }}
        >
          <form>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="heading" sx={{ mb: 1 }}>
                Heading
              </FormLabel>
              <TextField
                name="heading"
                placeholder="Enter Heading"
                id="heading"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="sub_heading" sx={{ mb: 1 }}>
                Sub Heading
              </FormLabel>
              <TextField
                name="sub_heading"
                placeholder="Enter Heading"
                id="sub_heading"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="image" sx={{ mb: 1 }}>
                Hero Image
              </FormLabel>
              <TextField name="image" type={"file"} id="image" />
            </FormGroup>
            <Button variant="outlined" type="submit">
              Update
            </Button>
          </form>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
          Top Questions
        </Typography>
        <Box
          sx={{
            background: "#fff",
            boxShadow: "1px 1px 10px #aaa",
            padding: "2rem",
            borderRadius: 2,
            mb: 5,
          }}
        >
          <form>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="question" sx={{ mb: 1 }}>
                Question
              </FormLabel>
              <TextField
                name="question"
                placeholder="Enter Question"
                id="question"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="answer" sx={{ mb: 1 }}>
                Answer
              </FormLabel>
              <TextField
                multiline
                rows={5}
                name="answer"
                placeholder="Enter Answer"
                id="answer"
              />
            </FormGroup>
            <Button variant="outlined" type="submit">
              Add
            </Button>
          </form>
        </Box>
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Answer</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.quetion}
                  </TableCell>
                  <TableCell align="right">{row?.answer}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
          Bottom Questions
        </Typography>
        <Box
          sx={{
            background: "#fff",
            boxShadow: "1px 1px 10px #aaa",
            padding: "2rem",
            borderRadius: 2,
            mb: 5,
          }}
        >
          <form>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="question" sx={{ mb: 1 }}>
                Question
              </FormLabel>
              <TextField
                name="question"
                placeholder="Enter Question"
                id="question"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="answer" sx={{ mb: 1 }}>
                Answer
              </FormLabel>
              <TextField
                multiline
                rows={5}
                name="answer"
                placeholder="Enter Answer"
                id="answer"
              />
            </FormGroup>
            <Button variant="outlined" type="submit">
              Add
            </Button>
          </form>
        </Box>
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Answer</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.quetion}
                  </TableCell>
                  <TableCell align="right">{row?.answer}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
          FAQs
        </Typography>
        <Box
          sx={{
            background: "#fff",
            boxShadow: "1px 1px 10px #aaa",
            padding: "2rem",
            borderRadius: 2,
            mb: 5,
          }}
        >
          <form>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="question" sx={{ mb: 1 }}>
                Question
              </FormLabel>
              <TextField
                name="question"
                placeholder="Enter Question"
                id="question"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="answer" sx={{ mb: 1 }}>
                Answer
              </FormLabel>
              <TextField
                multiline
                rows={5}
                name="answer"
                placeholder="Enter Answer"
                id="answer"
              />
            </FormGroup>
            <Button variant="outlined" type="submit">
              Add
            </Button>
          </form>
        </Box>
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Answer</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.quetion}
                  </TableCell>
                  <TableCell align="right">{row?.answer}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
          Reviews
        </Typography>
        <Box
          sx={{
            background: "#fff",
            boxShadow: "1px 1px 10px #aaa",
            padding: "2rem",
            borderRadius: 2,
            mb: 5,
          }}
        >
          <form>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="name" sx={{ mb: 1 }}>
                Name
              </FormLabel>
              <TextField
                name="name"
                placeholder="Enter Person Name"
                id="name"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="review" sx={{ mb: 1 }}>
                Enter Review
              </FormLabel>
              <TextField
                name="review"
                multiline
                rows={5}
                placeholder="Enter Review"
                id="review"
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
              <FormLabel htmlFor="image" sx={{ mb: 1 }}>
                Person Image
              </FormLabel>
              <TextField name="image" type={"file"} id="image" />
            </FormGroup>
            <Button variant="outlined" type="submit">
              Add
            </Button>
          </form>
        </Box>
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Person</TableCell>
                <TableCell align="right">Review</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.quetion}
                  </TableCell>
                  <TableCell align="right">{row?.answer}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
};
