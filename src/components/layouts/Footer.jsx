import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#bbc8e6",
        height: "90px",
        display: "grid",
        placeItems: "center",
        mt: 10
      }}
    >
      <p className="footer-txt">@num-game</p>
    </Box>
  );
}
