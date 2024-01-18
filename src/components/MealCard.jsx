import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Divider, Icon, Rating, Stack } from '@mui/material';

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
            🍖 {name} 
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {
              desc
            }
          </Typography>
          
          <Divider light sx={{marginBlock: 1}} />

          <Rating readOnly defaultValue={3.5} precision={0.5} />
        </CardContent>
      </Link>
    </Card>
  );
}