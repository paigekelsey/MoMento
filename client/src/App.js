import React from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import memories from './images/moMento.png';
// import backgroundVideo from './images/particle.mp4'

const App = () => {
    const classes = useStyles();

    return (
        <div>
                <video loop autoPlay>
        <source
          src="/images/particle.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <img className={classes.image} src={memories} alt="icon" height="300" />
          </AppBar>
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
        </div>
      );
    };
    
    export default App;
    
