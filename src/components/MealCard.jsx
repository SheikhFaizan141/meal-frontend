import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function MealCard({ id, name, desc }) {

  // console.log(name);
  return (
    <Card >
      <Link className='card-link' to={`meal/${id}`}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image="https://placehold.co/140"
        />
        <CardContent>
          <Stack direction="row">
            <Typography gutterBottom variant="h5" component="div">
              {name} 🍖
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
      </Link>
    </Card>
  );
}