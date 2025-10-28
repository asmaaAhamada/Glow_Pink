import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, IconButton, Stack, Typography, useTheme } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Table_Users() {
  const theme = useTheme();

  const headerBg =
    theme.palette.mode === "light" ? "#d628ab" : "#1e1e1e"; 
  // اختر لون النص حسب الخلفية
  const headerText =
    theme.palette.mode === "light"
      ? "#ffffff" 
      : "#f990e2"; 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: headerBg, color: headerText }}>
            <TableCell sx={{ color: headerText }}>User</TableCell>
            <TableCell align="right" sx={{ color: headerText }}>
              Phone_Number
            </TableCell>
            <TableCell align="right" sx={{ color: headerText }}>
              Orders
            </TableCell>
            <TableCell align="right" sx={{ color: headerText }}>
              Total Spent
            </TableCell>
            <TableCell align="right" sx={{ color: headerText }}>
              Join_Date
            </TableCell>
           
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                                <Stack direction="row" spacing={3} alignItems="center">
                
                 <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"/>
                 <Typography>{row.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
                          
              <TableCell align="right">
               {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
