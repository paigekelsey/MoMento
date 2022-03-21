import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import memories from './images/mom.png';
const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <img className={classes.image} src={memories} alt="icon" height="300" position='static' />
       
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
               
                </Grid>
                <Grid item xs={12} sm={4}>
                
                </Grid>
              </Grid>
            </Container>
          </Grow>
          {/* <video autoPlay loop muted id='video'>
              <source src = {backgroundVideo} type = 'video/mp4'/>
          </video> */}

        </Container>
 
      );
    };
    
    export default App;
    
