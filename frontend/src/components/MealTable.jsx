import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ meal }) {
  return (
    <TableContainer
      sx={{ display: "block", marginBottom: "30px" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", maxWidth: "50px" }}>
              {meal.name}
              {" - "}
              {new Date(meal.date).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Calories
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meal.foods.map((food) => (
            <TableRow
              key={food._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="right">{food.calories}</TableCell>
              <TableCell align="right">{food.fat}</TableCell>
              <TableCell align="right">{food.carbs}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
