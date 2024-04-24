import { Box, Typography } from "@mui/material";
import AppLayout from "../components/Layouts/AppLayout";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} textAlign={"center"} variant="h5">
        Select a friend to Chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
