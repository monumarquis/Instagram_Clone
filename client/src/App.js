import { Flex } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./pages/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ImageUpload from "./components/ImageUpload.jsx"
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
function App() {
  const location = useLocation()
  const { isAuth } = useSelector((state) => state.auth)
  console.log(isAuth);
  return (
  <>
    <Flex flexDir="row" className="App" backgroundColor={location.pathname.includes("/profile") ? "#faf8f7" : "#fff"} pr="5" >
      {/* <Signup /> */}
      {/* <Login /> */}
      {isAuth && <Navbar />}
      <AllRoutes />
      {/* <ImageUpload /> */}
    </Flex>
  </>
  );
}

export default App;
