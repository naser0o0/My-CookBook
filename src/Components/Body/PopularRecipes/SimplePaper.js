import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3}>
                <p> Hallo</p>
            </Paper>
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
        </Box>
    );
}
