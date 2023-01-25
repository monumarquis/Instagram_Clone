import { Flex } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./pages/Navbar";
// import ImageUpload from "./components/ImageUpload.jsx"
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
function App() {
  return (
    <Flex flexDir="row"  className="App">
      {/* <Signup /> */}
      {/* <Login /> */}
      <Navbar />
      <AllRoutes />
    </Flex>
  );
}

export default App;
