import React from "react";
import "./styles.css";

import {Grid} from '@material-ui/core'
import { Breakpoint, BreakpointProvider } from 'react-socks';

export default function App() {
  return (
    <>
    {/* <div className="App">
    </div> */}
    

    <BreakpointProvider>
            <Breakpoint small down>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                    <Grid item xs={12} className="grid-style1">code<br />sandbox</Grid>
                    <Grid item xs={12} className="grid-style">x</Grid>
                    <Grid item xs={12} className="grid-style">c</Grid>
                </Grid>
            </Breakpoint>


            <Breakpoint large up>
            <Grid container
            justify="center"
            alignItems="center">
                  <Grid item xs={4} className="grid-style1">code<br />sandbox</Grid>
                  <Grid item xs={4} className="grid-style">x</Grid>
                  <Grid item xs={4} className="grid-style">c</Grid>
            </Grid>
            </Breakpoint>
    </BreakpointProvider>
    </>
  );
}
