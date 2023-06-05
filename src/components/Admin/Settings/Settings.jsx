import * as React from "react";
import {
  Alert,
  Button,
  Card,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
        Change Password
        <Card sx={{ marginTop: 3, padding: 3 }}>
          <form action="" method="post">
            <TextField
              margin="normal"
              required
              fullWidth
              id="password0"
              label="Current Password"
              name="password0"
              autoComplete="password0"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="New Password"
              name="password1"
              autoComplete="password1"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              label="Confirm Password"
              name="password2"
              autoComplete="password2"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Update
            </Button>
          </form>
        </Card>
      </Typography>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Password Updated
        </Alert>
      </Snackbar>
    </>
  );
}
