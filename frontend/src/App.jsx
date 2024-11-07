import { Box, HStack } from "@chakra-ui/react"

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import Homepage from "./pages/Homepage.jsx"
import {useColorModeValue} from "./components/ui/color-mode.jsx"


function App() {

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
     <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/create" element={<CreatePage/>} />
    </Routes>
    
    </Box>
    </>
  )
}

export default App