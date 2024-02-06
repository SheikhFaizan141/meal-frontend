import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Divider, Icon, Rating, Stack } from '@mui/material';
// import VegIcon from './icons/VegIcon'

export default function MealCard({ imgUrl, id, name, desc, rating, isVeg }) {

  return (
    <Card>
      <Box component={Link} height={'100%'} className='card-link' to={`meal/${id}`}>
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
              {/* <VegIcon /> */}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {
                desc
              }
            </Typography>
          </Box>

          <Divider light sx={{ marginBlock: 1 }} />

          <Box  >
            {
              rating
                ?
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography variant='subtitl1' justifyContent={'space-between'}>{rating}</Typography>
                  <Rating readOnly defaultValue={5} value={rating} precision={0.5} />
                </Box>
                :
                <Box bgcolor={'goldenrod'} paddingBlock={0.25} paddingInline={0.75} sx={{ borderRadius: 1 }} >
                  <Typography variant={'subtitle1'} color={'secondary'} >New</Typography>
                </Box>
            }

          </Box>

        </CardContent>
      </Box>
    </Card>
  );
}
