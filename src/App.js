import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

import { Grid } from '@material-ui/core'


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Grid>
      <div style = {{   position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: 0,
                        padding: 0
                }}>
       <div
          style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",  
            
          }}
        >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
    </div>
    </Grid>
    
  );
};

export default App;
