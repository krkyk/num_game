import { Paper } from "@mui/material";

export default function CreatePaper({ children }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        m: "0 25%",
        height: "300px",
        display: "grid",
        placeContent: "center"
      }}
    >
      {children}
    </Paper>
  );
}
