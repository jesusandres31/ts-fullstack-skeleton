import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface CardsProps {
  deals: any[];
}

export default function Cards({ deals }: CardsProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {deals.map((deal) => (
        <Grid item xs={3} sm={3} key={deal.dealID}>
          <Box m={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <Typography variant="body2" color="textSecondary" component="p">
                  {deal.savings}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={deal.thumb}
                  title={deal.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {deal.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {deal.steamRatingPercent}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="secondary" variant="outlined">
                  {`(${deal.normalPrice}) ${deal.salePrice}`}
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
