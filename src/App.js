import React from "react";
import "./styles.css";

import {Grid, Paper} from '@material-ui/core'
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
                    <Grid item xs={10} style={{textAlign: 'justify', margin: 6}}>
                      {/* <Paper style={{width: '90%', margin: 10}}> */}
                        This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the 'body' tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
                    {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} className="grid-style">c</Grid>
                </Grid>
            </Breakpoint>


            <Breakpoint large up>
            <Grid container
            justify="center"
            alignItems="center">
                  <Grid item xs={4} className="grid-style1">code<br />sandbox</Grid>
                  <Grid item xs={4} style={{textAlign: 'justify', padding: 32}}>
                  This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the 'body' tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
                  </Grid>
                  <Grid item xs={4} style={{textAlign: 'justify', padding: 32}}>
                  This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the 'body' tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
                  </Grid>
            </Grid>
            </Breakpoint>
    </BreakpointProvider>
    </>
  );
}
