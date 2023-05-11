import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";
import Games from "./components/Games";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div>
      <Navigation />
      <Games />
    </div>
  );
}

export default App;
