import { ChakraProvider } from '@chakra-ui/react'

import {LandingPage} from "./Sections/LandingPage";
import {MyCozyCornerSection} from "./Sections/MyCozyCornerSection";
import {AboutMeSection} from "./Sections/AboutMeSection";

function App() {
  return (
    <ChakraProvider>
      <LandingPage/>
      <MyCozyCornerSection/>
      <AboutMeSection/>
    </ChakraProvider>
  );
}

export default App;