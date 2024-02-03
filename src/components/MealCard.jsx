import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Divider, Icon, Rating, Stack } from '@mui/material';

export default function MealCard({ imgUrl, id, name, desc, rating }) {

  // console.log(rating);
  return (
    <Card  >
      <Link className='card-link' to={`meal/${id}`}>
        <CardMedia
          component="img"
          alt={name}
          height="140px"
          sx={{ maxHeight: '140px' }}
          image={imgUrl}
        />
        <CardContent >
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography gutterBottom variant="h6" component="div">
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
            {
              rating
                ?
                <Box>
                  {rating}
                  <Rating readOnly defaultValue={5} value={rating} precision={0.5} />
                </Box>
                : 
                <Box bgcolor={'goldenrod'} paddingBlock={0.25} paddingInline={0.75} sx={{borderRadius: 1}} > 
                  <Typography variant={'subtitle1'} color={'secondary'} >New</Typography>
                </Box>
            }

          </Box>

        </CardContent>
      </Link>
    </Card>
  );
}