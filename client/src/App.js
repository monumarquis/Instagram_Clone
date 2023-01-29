import { Flex } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./pages/Navbar";
import { useLocation } from "react-router-dom";
// import ImageUpload from "./components/ImageUpload.jsx"
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
function App() {
  const location = useLocation()
  // console.log(location.pathname);
  return (
    <Flex flexDir="row" className="App" backgroundColor={location.pathname.includes("/profile") ? "#faf8f7" : "#fff"} pr="5" >
      {/* <Signup /> */}
      {/* <Login /> */}
      <Navbar />
      <AllRoutes />
      {/* <ImageUpload /> */}
    </Flex>
  );
}

export default App;
