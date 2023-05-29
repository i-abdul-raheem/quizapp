import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { BLUE, useIsMobileView, WHITE } from "../../utils";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const LoginSignup = ({ open, handleClose }) => {
  const [loginSide, setLoginSide] = useState(true);
  const isMobileView = useIsMobileView();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: isMobileView ? "92%" : 520,
          maxWidth: isMobileView ? "92%" : "auto",
          bgcolor: WHITE,
          borderRadius: "5px",
          boxShadow: 24,
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "10px",
            color: BLUE,
          }}
        >
          <AdbIcon />
          <Typography variant="h6" noWrap component="a">
            QUIZ APP
          </Typography>
        </Box>
        <form
          action=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "40px",
            padding: "2rem 1rem",
          }}
        >
          {loginSide && (
            <>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" aria-describedby="email-helper" />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  aria-describedby="password-helper"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember Me"
                />
              </FormControl>
            </>
          )}
          {!loginSide && (
            <>
              <Grid container spacing={2}>
                <Grid style={{ width: "100%" }} item md={6} sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="fname">First Name</InputLabel>
                    <Input id="fname" aria-describedby="fname-helper" />
                  </FormControl>
                </Grid>
                <Grid style={{ width: "100%" }} item md={6} sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="lname">Last Name</InputLabel>
                    <Input id="lname" aria-describedby="lname-helper" />
                  </FormControl>
                </Grid>
                <Grid style={{ width: "100%" }} item sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input
                      id="email"
                      type="email"
                      aria-describedby="email-helper"
                    />
                  </FormControl>
                </Grid>
                <Grid style={{ width: "100%" }} item md={6} sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      type="password"
                      aria-describedby="password-helper"
                    />
                  </FormControl>
                </Grid>
                <Grid style={{ width: "100%" }} item md={6} sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="password2">
                      Confirm Password
                    </InputLabel>
                    <Input
                      id="password2"
                      type="password"
                      aria-describedby="password2-helper"
                    />
                  </FormControl>
                </Grid>
                <Grid style={{ width: "100%" }} item md={6} sm={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <label
                      htmlFor="dob"
                      style={{
                        width: "100%",
                        textAlign: "left",
                        marginBottom: "10px",
                      }}
                    >
                      Date of Birth
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker />
                    </LocalizationProvider>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => setLoginSide(!loginSide)}>
              {loginSide ? "Create Account" : "Already have an account?"}
            </Button>
            <Button variant="contained">
              {loginSide ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
