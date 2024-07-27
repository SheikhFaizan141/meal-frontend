import { Box, Button, Checkbox, Stack, TablePagination, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { json, Link, useLoaderData, useNavigation } from "react-router-dom";
import { Add, Delete, Edit } from "@mui/icons-material";
import { authFetch } from "../../api/services";
import axios from "axios";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export async function loader({ request }) {
    try {
        // await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        const res = await authFetch('api/meal');


        const meals = res.data;

        console.log(meals);
        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];



        return json(meals);
    } catch (error) {
        console.log(error);
    }
}

export default function AdminMeals() {
    const { data: meals } = useLoaderData();
    console.log('loader', meals);
    const [page, setPage] = useState(0);
    // return null;
    return (
        <Box>

            <Box borderRadius={1} marginBlockEnd={2}>
                <Stack direction={'row'} paddingBlock={2}>
                    <Typography variant='h5' flex={1}>Meals</Typography>
                    <Button startIcon={<Add />} component={Link} to='/admin/meals/new' variant="contained" color="success">
                        Add Meal
                    </Button>

                </Stack>
            </Box>
            <Box component={Paper} borderRadius={2} marginBlockEnd={5}>
                <TableContainer>
                    <Table sx={{ minWidth: 650, paddingBlock: 1 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#EBEBEB' }} >
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                    // color="primary"
                                    // checked={isItemSelected}
                                    // inputProps={{
                                    //     'aria-labelledby': labelId,
                                    // }}
                                    />
                                    Name
                                </TableCell>
                                {/* <TableCell align="left">Meal</TableCell> */}
                                <TableCell align="left">Vegetarian</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Edit</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {meals.map((meal) => (

                                <TableRow
                                    component={Link}
                                    to={meal.slug}
                                    key={meal.id}
                                    sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Stack direction={'row'} columnGap={2}>
                                            <img src={meal.featured_img ?? ''} alt="" width='40' height='40' />
                                            {meal.name}
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left">
                                        {meal.is_veg ? 'TRUE' : 'FALSE'}
                                    </TableCell>
                                    <TableCell align="left">
                                        {formatCurrency(meal.price)}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button ><Edit/></Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button ><Delete/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 15]}
                    rowsPerPage={6}
                    page={0}
                    count={Number.parseInt(meals.last_page)}

                />

                {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
            </Box>
        </Box>
    )
}

function AdminMealRow(params) {

}