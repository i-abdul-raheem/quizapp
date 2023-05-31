import { Close, StarOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Dialog,
  FormControlLabel,
  Grid,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BooksCogs, SampleTest } from "../../assets";
import { Footer, Layout } from "../../components";
import { BLUE, ORANGE, PrimaryButton, SecondaryButton } from "../../utils";

export const Quiz = () => {
  useEffect(() => {
    document.body.style.background = "#f7f7f7";
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.grey[500],
      fontSize: "12px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, total, score, accuracy, date) {
    return { name, total, score, accuracy, date };
  }

  const rows = [
    createData("Korn Ferry Test 1", 10, 6, "60%", "Mar 10, 2023"),
    createData("Korn Ferry Test 2", "-", "-", "-", "-"),
    createData("Korn Ferry Test 3", "-", "-", "-", "-"),
    createData("Korn Ferry Test 4", "-", "-", "-", "-"),
    createData("Korn Ferry Test 5", "-", "-", "-", "-"),
    createData("Korn Ferry Test 6", "-", "-", "-", "-"),
    createData("Korn Ferry Test 7", "-", "-", "-", "-"),
    createData("Korn Ferry Test 8", "-", "-", "-", "-"),
    createData("Korn Ferry Test 9", "-", "-", "-", "-"),
    createData("Korn Ferry Test 10", "-", "-", "-", "-"),
  ];
  const [openStart, setOpenStart] = useState(false);
  const [testPortal, setTestPortal] = useState(false);
  const [inProgress, setInProgress] = useState(true);
  return (
    <>
      <Layout>
        <Box
          sx={{
            background: BLUE,
            textAlign: "center",
            color: "white",
            padding: "3rem 1rem 8rem 1rem",
            marginBottom: 3,
          }}
        >
          <Container maxWidth={"sm"}>
            <Typography variant="h4" mb={2}>
              Korn Ferry Tests
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "20px",
                marginBottom: 2,
              }}
            >
              <Rating name="read-only" value={5} readOnly />
              <Typography variant="p">17 tests | 199 questions</Typography>
            </Box>
            <Typography variant="p" mb={3}>
              Korn Ferry is a management consulting firm headquartered in Los
              Angeles. It was founded in 1969.
            </Typography>
          </Container>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: {
                lg: "absolute",
                xl: "absolute",
                md: "static",
                sm: "static",
                xs: "static",
              },
              top: "-6rem",
              left: 0,
              width: "100%",
            }}
          >
            <Container maxWidth={"lg"}>
              <Box
                sx={{
                  padding: "3rem",
                  background: "#fff",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: {
                    sm: "column-reverse",
                    xs: "column-reverse",
                    md: "column-reverse",
                    lg: "row",
                  },
                  rowGap: 4,
                }}
                mb={4}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography variant="h4" mb={3}>
                    Your path to success starts here
                  </Typography>
                  <Typography variant="p" mb={5}>
                    Access every test, track your progress and unlock premium
                    practice resources.
                  </Typography>
                  <List sx={{ marginBottom: 5, marginTop: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="1000s of questions" />
                        </ListItem>
                      </Grid>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="Flexible practice" />
                        </ListItem>
                      </Grid>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="Developed by experts" />
                        </ListItem>
                      </Grid>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="Worked solutions" />
                        </ListItem>
                      </Grid>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="Personal dashboard" />
                        </ListItem>
                      </Grid>
                      <Grid item sm={12} md={6}>
                        <ListItem>
                          <ListItemIcon>
                            <StarOutlined
                              sx={{
                                color: "#fff",
                                background: "#FFB736",
                                padding: "3px",
                                fontSize: "24px",
                                borderRadius: 50,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary="Free Aptitude Test Guide" />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </List>
                  <PrimaryButton>Upgrade</PrimaryButton>
                </Box>
                <img src={BooksCogs} alt="Books" width="50%" />
              </Box>
              <Container maxWidth="lg" sx={{ marginBottom: 3 }}>
                <Grid container spacing={3}>
                  <Grid item sx={{ width: "100%" }} lg={4}>
                    <Box sx={{ background: "#fff", padding: "2rem" }}>
                      <Typography variant="h5" mb={3}>
                        What is Practice Aptitude Tests?
                      </Typography>
                      <Typography variant="p" sx={{ wordBreak: "break-all" }}>
                        1000s of tests, fully worked solutions and a personal
                        dashboard - your tools for getting the scores you need.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sx={{ width: "100%" }} lg={8}>
                    <Box sx={{ background: "#fff", padding: "2rem" }}>
                      <Typography variant="h5" mb={3}>
                        Why it works?
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        After 7 years and 9 million users, we know how to help
                        you succeed.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        <b>👩‍💻 Get prepared</b> with our expansive range of tests
                        and questions.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        <b>🛠️ Practice anytime, anywhere</b> with our optimized
                        test platform.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        <b>👨‍🎓 Learn from the best.</b> Our questions are written
                        by industry experts.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        <b>📈 Improve your score</b> with clear, fully worked
                        question solutions.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
              <Container maxWidth="lg" sx={{ marginBottom: 3 }}>
                <Grid container spacing={3}>
                  <Grid item sx={{ width: "100%" }} lg={8}>
                    <Box sx={{ background: "#fff", padding: "2rem" }}>
                      <Typography variant="h5" mb={3}>
                        Track your results
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        Get access to your personal dashboard, where we keep a
                        track of your practice scores, and compare them against
                        your peers.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        The dashboard will help you understand where you need
                        most practice.
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          display: "block",
                          fontSize: "16px",
                          marginBottom: 2,
                        }}
                      >
                        Put in the hard work, you’ll be coming out on top.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sx={{ width: "100%" }} lg={4}>
                    <Box sx={{ background: "#fff", padding: "2rem" }}>
                      <Typography variant="h5" mb={3}>
                        Tests that work for you
                      </Typography>
                      <Typography variant="p" sx={{ wordBreak: "break-all" }}>
                        Our platform provides the tests to practice the
                        essential different subject areas of each of our test
                        types, as well as guides for leading employers and test
                        publishers.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
              <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
                <Grid container spacing={3}>
                  <Grid item sx={{ width: "100%" }} lg={12}>
                    <Box sx={{ background: "#fff", padding: "2rem" }}>
                      <Typography variant="h5" mb={3}>
                        Practice is for everyone, and so are we
                      </Typography>
                      <Typography variant="p" sx={{ wordBreak: "break-all" }}>
                        Practice for tests can be time consuming and boring, not
                        everyone has the patience to sit down and get the work
                        done. We’re here to make practicing for tests much
                        easier, giving everyone a chance to improve and secure
                        the job they are after.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
              <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="center">Total</StyledTableCell>
                      <StyledTableCell align="center">Score</StyledTableCell>
                      <StyledTableCell align="center">Accuracy</StyledTableCell>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.total}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.score}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.accuracy}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.date}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <PrimaryButton onClick={() => setOpenStart(true)}>
                            Take Test
                          </PrimaryButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
            <Footer />
          </Box>
        </Box>
      </Layout>
      <Dialog onClose={() => setOpenStart(false)} fullScreen open={openStart}>
        <span
          onClick={() => setOpenStart(false)}
          style={{
            position: "absolute",
            padding: "1rem",
            top: 0,
            right: 0,
            cursor: "pointer",
          }}
        >
          <Close />
        </span>
        <Container
          maxWidth="sm"
          sx={{ padding: "4rem 2rem", textAlign: "center" }}
        >
          <Typography variant="h4">Korn Ferry Test 1</Typography>
          <Typography variant="h6" mb={5}>
            16 questions | 20 minutes
          </Typography>
          <Typography variant="p" mb={5}>
            All questions are multiple choice and there is only one correct
            answer. The test cannot be paused. Try to take the test in an
            environment where you will not be disturbed.
          </Typography>
          <Box sx={{ marginTop: 5 }}>
            <PrimaryButton
              onClick={() => {
                setOpenStart(false);
                setTestPortal(true);
              }}
            >
              Timed Test
            </PrimaryButton>
            <SecondaryButton
              onClick={() => {
                setOpenStart(false);
                setTestPortal(true);
              }}
              sx={{ border: `1px solid ${ORANGE}` }}
            >
              Practice Test
            </SecondaryButton>
          </Box>
        </Container>
      </Dialog>
      <Dialog onClose={() => setTestPortal(false)} fullScreen open={testPortal}>
        <Box sx={{ background: "#f7f7f7", width: "100%", minHeight: "100vh" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "2rem 1rem",
              boxShadow: "1px 2px 10px #aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "20px",
              zIndex: 99,
              borderBottom: "1px solid #aaa",
              position: "sticky",
              top: 0,
            }}
          >
            <Link
              sx={{
                cursor: "pointer",
                position: "absolute",
                top: 0,
                left: 0,
                padding: "2rem 1rem",
              }}
            >
              <Typography variant="p">End Test</Typography>
            </Link>
            <Link sx={{ cursor: "pointer", color: BLUE }}>1</Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              2
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              3
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              4
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              5
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              6
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              7
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              8
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              9
            </Link>
            <Link
              sx={{ cursor: "pointer", color: "gray", textDecoration: "none" }}
            >
              10
            </Link>
          </Box>
          {inProgress ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "stretch",
                minHeight: "calc(100% - 84px)",
                justifyContent: "center",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xl: "70%",
                    lg: "70%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  padding: "2rem",
                }}
              >
                <img src={SampleTest} alt="Sample Test" width={"100%"} />
              </Box>
              <Box
                sx={{
                  width: {
                    xl: "30%",
                    lg: "30%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  background: "#fff",
                  boxShadow: "-2px 5px 6px #aaa",
                  padding: "2rem",
                }}
              >
                <Typography variant="h4" mb={5}>
                  Question 1
                </Typography>
                <Typography variant="p" mb={5}>
                  What is the ratio of males to females working in Audit In
                  2022?
                </Typography>
                <RadioGroup
                  sx={{ marginTop: 3, marginBottom: 3 }}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="0.85:1"
                    control={<Radio />}
                    label="0.85:1"
                  />
                  <FormControlLabel
                    value="0.94:1"
                    control={<Radio />}
                    label="0.94:1"
                  />
                  <FormControlLabel
                    value="1.06:1"
                    control={<Radio />}
                    label="1.06:1"
                  />
                  <FormControlLabel
                    value="1.18:1"
                    control={<Radio />}
                    label="1.18:1"
                  />
                </RadioGroup>
                <Link sx={{ display: "block", marginBottom: 3 }}>
                  Show the solution
                </Link>
                <Box sx={{ marginTop: 3 }}>
                  <SecondaryButton
                    onClick={() => {
                      setInProgress(false);
                    }}
                    sx={{ border: `1px solid ${BLUE}` }}
                  >
                    Back
                  </SecondaryButton>
                  <PrimaryButton
                    onClick={() => {
                      setInProgress(false);
                    }}
                    sx={{
                      background: BLUE,
                      "&:hover": { background: "dodgerblue" },
                    }}
                  >
                    Next
                  </PrimaryButton>
                </Box>
                <Link sx={{ display: "block", marginTop: 3, marginBottom: 3 }}>
                  End test
                </Link>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "stretch",
                minHeight: "calc(100% - 84px)",
                justifyContent: "center",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "column-reverse",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xl: "70%",
                    lg: "70%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  padding: "2rem",
                }}
              >
                <Box
                  sx={{
                    background: "#fff",
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: 4,
                    rowGap: 4,
                    flexDirection: {
                      xl: "row",
                      lg: "row",
                      md: "column-reverse",
                      sm: "column-reverse",
                      xs: "column-reverse",
                    },
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h4" mb={3}>
                      Your path to success starts here
                    </Typography>
                    <Typography variant="p" mb={3}>
                      Access every test, track your progress and unlock premium
                      practice resources.
                    </Typography>
                    <List sx={{ marginBottom: 2, marginTop: 2 }}>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="1000s of questions" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Flexible practice" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Developed by experts" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Worked solutions" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Personal dashboard" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <StarOutlined
                            sx={{
                              color: "#fff",
                              background: "#FFB736",
                              padding: "3px",
                              fontSize: "24px",
                              borderRadius: 50,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Free Aptitude Test Guide" />
                      </ListItem>
                    </List>
                    <PrimaryButton>Upgrade</PrimaryButton>
                  </Box>
                  <img src={BooksCogs} alt="Books" width="100%" />
                </Box>
              </Box>
              <Box
                sx={{
                  width: {
                    xl: "30%",
                    lg: "30%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  background: "#fff",
                  boxShadow: "-2px 5px 6px #aaa",
                  padding: "2rem",
                }}
              >
                <Box sx={{ width: "100%" }} mb={3}>
                  <LinearProgress variant="determinate" value={70} />
                </Box>
                <Typography variant="h4" mb={3}>
                  Your score: 70%
                </Typography>
                <Typography variant="p" display={"block"} mb={3}>
                  User average for this test is 85%.
                </Typography>
                <Typography variant="p" display={"block"} mb={5}>
                  You’re on your way, but we suggest you keep practising. Our
                  premium dashboard allows you to keep track of your scores and
                  compare against your peers.
                </Typography>
                <Box sx={{ marginTop: 3 }}>
                  <PrimaryButton
                    onClick={() => {
                      setOpenStart(false);
                      setTestPortal(true);
                    }}
                    sx={{
                      background: BLUE,
                      "&:hover": { background: "dodgerblue" },
                    }}
                  >
                    Upgrade your practice
                  </PrimaryButton>
                </Box>
                <Link
                  sx={{
                    display: "block",
                    marginBottom: 3,
                    marginTop: 3,
                    cursor: "pointer",
                  }}
                >
                  Show the solution
                </Link>
                <Link
                  sx={{
                    display: "block",
                    marginTop: 3,
                    marginBottom: 3,
                    cursor: "pointer",
                  }}
                >
                  Your dashboard
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
};
