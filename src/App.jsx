import Header1 from "./components/hearder/Header1"
import Header2 from "./components/hearder/Header2"
import Header3 from "./components/hearder/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// @ts-ignore
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScroolToTop from "./components/scroll/ScroolToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
      <Header1/>
      <Header2/>
      <Header3/>

 <Box bgcolor={theme.
// @ts-ignore
 palette.bg.main}>
      <Hero/>
      <Main/>
 </Box>
 <Footer/>

 <ScroolToTop/>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App
