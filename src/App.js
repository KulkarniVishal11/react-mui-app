import { Box, Stack } from "@mui/material";
import Feedbar from "./Components/Feedbar";
import { Navbar } from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feedbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
