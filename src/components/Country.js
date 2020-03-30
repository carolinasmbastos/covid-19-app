import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    root: {
      width: '50%',
      margin: 'auto',
      marginTop: '2%'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '5%'
    },
    title: {
      fontSize: 14
    }
  });
  
const Country = (props) => {
    const classes = useStyles();
    
    let date = new Date(Date.parse(props.stats.lastUpdate))
    return (
      <Card className={classes.root}>
        <CardContent className={classes.grid}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Confirmed 
            <Typography variant="h7" component="h2">
            {props.stats.confirmed}
            </Typography>
          </Typography>
          
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Deaths 
            <Typography variant="h7" component="h2">
            {props.stats.deaths}
            </Typography>
          </Typography>
          
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Recovered 
            <Typography variant="h7" component="h2">
            {props.stats.recovered}
            </Typography>
          </Typography>
          
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Last Updated 
            <Typography variant="h7" component="h2">
            {date.toDateString()}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
  export default Country