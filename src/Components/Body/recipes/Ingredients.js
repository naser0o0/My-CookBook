import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Ingredients.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#f4bad8",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function Ingredients({ ingredients }) {
    const listOfIngredients = ingredients.map((ingredient) => {
        let unit = ingredient.fields.unit;
        let quantity = ingredient.fields.quantity;
        if (!ingredient.fields.unit) {
            unit = "";
        }
        if (!ingredient.fields.quantity) {
            quantity = "";
        }
        const part1 = `${quantity} ${unit}`;
        const ingredientName = `${ingredient.fields.ingredient}`;
        // const ingredients = `${quantity} ${unit} ${ingredient.fields.ingredient}`;
        // console.log(ingredients);

        return (
            <>
                <StyledTableRow key={ingredient.fields.ingredient}>
                    <StyledTableCell scope="row">{part1}</StyledTableCell>
                    <StyledTableCell align="left">
                        {ingredientName}
                    </StyledTableCell>
                </StyledTableRow>
            </>
        );
    });
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 400 }} aria-label="customized table">
                <TableBody>{listOfIngredients}</TableBody>
            </Table>
        </TableContainer>
    );
}
