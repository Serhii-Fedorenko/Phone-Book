import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box component="section">
      <Typography
        sx={{ textAlign: "center" }}
        fontSize={"8vmin"}
        component="h1"
      >
        Home Page
      </Typography>
    </Box>
  );
};

export default Home;
