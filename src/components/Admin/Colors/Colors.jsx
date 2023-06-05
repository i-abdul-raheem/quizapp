import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

function createData(name, color) {
  return { name, color };
}

const rows = [
  createData("Primary Background", "#0394CE"),
  createData("Primary Button", "#F36A4A"),
  createData("Secondary Button", "#D2573A"),
  createData("Text Primary", "#222222"),
  createData("Text Secondary", "#777777"),
  createData("Review Background", "#1B1C40"),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #aaa",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function Colors() {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState({ title: "", id: "", code: "" });
  const handleOpen = (title, code) => {
    setColor({ ...color, title, code });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const changeColor = () => console.log(color);
  return (
    <>
      <Typography id="modal-modal-title" variant="h4" component="h2" mb={3}>
        Change Colors
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell align="right">
                  <input type="color" value={row?.color} readOnly />
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => handleOpen(row?.name, row?.color)}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            {color?.title}
          </Typography>
          <input
            style={{ width: "100%", height: "50px", marginBottom: "1rem" }}
            type="color"
            value={color?.code}
          />
          <Button variant="outlined" onClick={changeColor}>
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
}
