//  https://paintsolutions.org/
//React and Picture imports
import React from 'react'
import PaintSplatter from './Pictures/PaintSplatter.jpg'

//Material UI imports
import { ThemeProvider, createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from '@material-ui/core/Paper';

//Custom Components Imports
import Gallery from './Components/Gallery'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'

// CSS imports
import './App.css';

//Theme Overrides
let theme = createMuiTheme({
  palette: {
    background: {
      default: "#922B79"
    },
    primary: {
      main: '#922B79',
    },
    secondary: {
      main: '#FEF102',
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 16,
   },
});
theme = responsiveFontSizes(theme);

//Application
export default function App() {
  //Custom variables & functions
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="AppBar">
          <Navbar/>
        </div>

        <div className='Gallery'>
          <Gallery/>
        </div>

        <div id='About' className="About">
          <Paper>
            <About/>
          </Paper>
        </div>

        <div id='Services' className="Services">
          <Services/>
        </div>

        <div id='Testimonials' className="Testimonials">
          <Testimonials/>
        </div>

        <div id='Contact' className="Contact">
          <Contact/>
        </div>
      </ThemeProvider>
    </div>
  );
};
