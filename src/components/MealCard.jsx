import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Divider, Icon, Rating, Stack } from '@mui/material';

export default function MealCard({ id, name, desc }) {

  // console.log(name);
  return (
    <Card  >
      <Link className='card-link' to={`meal/${id}`}>
        <CardMedia
          component="img"
          alt={name}
          height="140px"
          sx={{ maxHeight: '140px' }}
          image="https://placehold.co/420"
        />
        <CardContent >
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography  gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Icon>🥔</Icon>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {
                desc
              }
            </Typography>
          </Box>

          <Divider light sx={{ marginBlock: 1 }} />

          <Box display={'flex'} alignItems={'center'} gap={'0.5rem'} >
            3.8
            <Rating readOnly defaultValue={3.5} precision={0.5} />
          </Box>

        </CardContent>
      </Link>
    </Card>
  );
}