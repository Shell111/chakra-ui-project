import { ChakraProvider } from "@chakra-ui/react"

import Header from "./components/Header";
import Card from "./components/Card";
import theme from "../src/theme/index";
import "../src/theme/styles.css"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header/>
        <Card/>
      </div>
    </ChakraProvider>
  );
}

export default App;
