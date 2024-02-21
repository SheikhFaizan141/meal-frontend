import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Divider, Rating, Skeleton, Stack } from '@mui/material';

// Need review
function getWeeksBetween(currentDate, givenDate) {
  const timeDifference = currentDate.getTime() - givenDate.getTime();
  const weeksDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
  return weeksDifference;
}

export default function MealCard({ imgUrl, id, name, desc, rating, createdAt, state }) {
  const currentDate = new Date();
  const createDate = new Date(createdAt);

  const weeks = getWeeksBetween(currentDate, createDate);

  // console.log(weeks);
  return (
    <Card component={'div'} sx={{flex: 1}} >
      <Box component={Link} className='card-link' to={`meal/${id}`}>
        {
          state
            ?
            <CardMedia
              component="img"
              alt={name}
              height="140px"
              sx={{ maxHeight: '140px' }}
              image={imgUrl}
            />
            :
            <Skeleton variant="rectangular" height={140} />
        }
        <CardContent >
          <Box>
            {
              state
                ?
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
                    {name}
                  </Typography>
                </Stack>
                :
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
            }

            {
              state
                ?
                <Typography variant="body2" color="black" sx={{ textDecoration: 'none' }}>
                  {
                    desc.split(' ').slice(0, 40).join(' ')
                  }
                </Typography>
                :
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
            }
          </Box>

          <Divider light sx={{ marginBlock: 1 }} />

          {
            state &&
            <Box  >
              {
                weeks > 1
                  ?
                  <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='subtitl1' justifyContent={'space-between'}>{rating}</Typography>
                    <Rating readOnly defaultValue={5} value={rating} precision={0.5} />
                  </Box>
                  :
                  <Box display={'flex'} paddingBlock={0.25}>
                    <Typography paddingBlock={0.25} paddingInline={1} borderRadius={1} bgcolor={'#1976d2'} variant={'subtitle1'} color={'white'} >New</Typography>
                  </Box>
              }
            </Box>

          }
        </CardContent>
      </Box>
    </Card>
  );
}
