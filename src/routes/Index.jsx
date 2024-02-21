import { Divider, Stack, TextField, Chip, Typography, Button, SvgIcon, Skeleton } from '@mui/material';
import MealCard from '@components/MealCard'
import { Form, Outlet, json, useLoaderData, useNavigation, useSubmit } from "react-router-dom"
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import AppPagination from '../components/AppPagination';

// import second from 'first'
function filterWithTag(tag, arr) {
    const newArr = [...arr];
    switch (tag) {
        case 'relevance': {
            return newArr;
        }
        case 'cost': {
            return newArr.sort((a, b) => a.price - b.price);
        }
        case 'rating': {
            return newArr.sort((a, b) => a.rating - b.rating)
        }
        default:
            console.error('Invalid Filter');
            break;
    }
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const q = url.searchParams.get('q');

    let fetchUrl;
    if (url.searchParams.has('q') && url.searchParams.has('page')) {
        fetchUrl = new URL(`api/meal?q=${q}&page=${page}`, __API_URL__);

    } else if (url.searchParams.has('q')) {
        fetchUrl = new URL(`api/meal?q=${q}`, __API_URL__);

    } else if (url.searchParams.has('page')) {
        fetchUrl = new URL(`api/meal?page=${page}`, __API_URL__);

    } else {
        fetchUrl = new URL(`api/meal`, __API_URL__);
    }

    const res = await fetch(fetchUrl);

    if (!res.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }



    const d = await res.json();
    return json({ data: d, q });;
}

export default function Index() {
    const { data, q } = useLoaderData();
    const { data: meals, last_page: lastPage } = data;
    const [tag, setTag] = useState('relevance');
    const searchRef = useRef();
    const submit = useSubmit();

    // state
    const navigation = useNavigation();
    console.log(navigation);

    useEffect(() => {
        document.getElementById('q').value = q;
    }, [q])


    const filterMeals = filterWithTag(tag, meals);
    function handleSubmit(e) {
        e.preventDefault();
        const value = searchRef.current.value.replace(/\s\s+/g, ' ').trim();
        const searchParams = new URLSearchParams();


        if (value !== '') {
            searchParams.append("q", value);
        }

        submit(searchParams);
    }

    // if (navigation.state === "loading") {
    //     return (
    //         <div>
    //             Loading
    //         </div>
    //     )
    // }

    return (
        <div className="meal-container">
            {
                (navigation.state !== "loading") && <Hero />
            }

            {/* <Outlet /> */}
            <Box className="filter-ui-container mb-1">
                <Stack direction={'row'} className='filter-ui-wrapper mb-1' >
                    <Box className="m-f-box filter-search-wrapper">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <TextField inputRef={searchRef} name='q' defaultValue={q} sx={{ borderRadius: 1 }} id="q" label="Search" variant="outlined" />
                        </form>
                    </Box>

                    <Box className="m-f-box filter-chip-list-wrapper">
                        <Stack fontSize={'1.15rem'} direction="row" spacing={1}>
                            <Chip clickable onClick={() => setTag('relevance')} label="Relevance" color={tag === 'relevance' ? "success" : "primary"} variant={'filled'} />
                            <Chip clickable onClick={() => setTag('rating')} label="Rating" color={tag === 'rating' ? "success" : "primary"} variant="filled" />
                            <Chip clickable onClick={() => setTag('cost')} label="cost" color={tag === 'cost' ? "success" : "primary"} variant="filled" />
                            <Chip clickable label="primary" color="primary" variant="filled" />
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <Box>
                <Box className="meal-wrapper m-grid">
                    {
                        filterMeals.map(meal => {
                            return (
                                <Box key={meal.id} className="card meal-card">
                                    <MealCard state={navigation.state === 'idle'} createdAt={meal.created_at} rating={meal?.rating} id={meal.id} name={meal.name} desc={meal.description} imgUrl={meal.url} isVeg={meal.isVeg} />
                                </Box>
                            )
                        })
                    }
                </Box>
                <Stack paddingBlock={1} flexDirection={'row'} justifyContent={'center'}>
                    <AppPagination count={lastPage} isLoading={navigation.state === 'loading'} />
                </Stack>
            </Box>
        </div>
    )
}

function Hero({ isLoading }) {

    return (
        <Box component={'section'} padding={2} bgcolor={'lch(60% 32.34 80.104)'} borderRadius={2} marginBlockEnd={2}>
            <Stack direction={'row'} >
                <Box flex={2}>
                    <Typography fontWeight={700} style={{ WebkitTextStroke: '1px black' }} letterSpacing={'0.2rem'} sx={{ textShadow: '3px 3px #000' }} variant='h2' color={'rgb(166 0 10)'} marginBlockEnd={1} textTransform={'uppercase'} >Healthy</Typography>
                    <Typography variant={'subtitle1'} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </Box>
                <Box flex={1} display={'flex'} justifyContent={'center'} maxHeight={'auto'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                    >
                        <g transform="translate(-288 -384)">
                            <g>
                                <path
                                    fill="#8FF467"
                                    d="M337.653 412.361a.985.985 0 00-.438.512c-.039.101-.125.502.098 1.085.782 2.045 5.705 11.684 5.705 11.684a1 1 0 001.256.476 7.66 7.66 0 003.836-10.955 7.659 7.659 0 00-10.457-2.802z"
                                ></path>
                                <path
                                    fill="#75F144"
                                    d="M340.596 411.386a7.642 7.642 0 015.762 3.777 7.658 7.658 0 01-3.208 10.676 1 1 0 001.124.279 7.66 7.66 0 003.836-10.955 7.659 7.659 0 00-7.514-3.777z"
                                ></path>
                                <path
                                    fill="#8FF467"
                                    d="M325.753 406.065a.982.982 0 00-.117.696c.019.1.154.476.632.857 1.711 1.362 10.807 7.226 10.807 7.226a1 1 0 001.329-.224 7.659 7.659 0 00-2.194-11.357 7.66 7.66 0 00-10.457 2.802z"
                                ></path>
                                <path
                                    fill="#75F144"
                                    d="M331.588 402.28a7.659 7.659 0 015.209 12.34l-.024.029.302.195a1 1 0 001.329-.224 7.659 7.659 0 00-2.194-11.357 7.618 7.618 0 00-4.622-.983z"
                                ></path>
                                <path
                                    fill="#8FF467"
                                    d="M312.3 406.562c0 .212.058.439.239.654.067.08.374.345.986.435 2.164.318 12.984.789 12.984.789a1 1 0 001.034-.868 7.66 7.66 0 00-7.588-8.665 7.659 7.659 0 00-7.655 7.655z"
                                ></path>
                                <path
                                    fill="#75F144"
                                    d="M323.128 399.595a7.623 7.623 0 011.657 5.847 1 1 0 01-1.034.868s-7.691-.335-11.401-.63c-.033.289-.05.584-.05.882 0 .212.058.439.239.654.067.08.374.345.986.435 2.164.318 12.984.789 12.984.789a1 1 0 001.034-.868 7.66 7.66 0 00-4.415-7.977z"
                                ></path>
                                <path
                                    fill="#8FF467"
                                    d="M300.897 413.72a.99.99 0 00.486.428c.106.045.517.143 1.114-.086 2.047-.785 11.654-5.8 11.654-5.8a1 1 0 00.462-1.265 7.66 7.66 0 00-10.914-3.734 7.659 7.659 0 00-2.802 10.457z"
                                ></path>
                                <path
                                    fill="#8FF467"
                                    d="M295.73 426.155a1 1 0 001.222-.441l6.506-11.424a1.001 1.001 0 00-.245-1.276 7.66 7.66 0 00-11.414 2.149 7.66 7.66 0 003.931 10.992z"
                                ></path>
                                <path
                                    fill="#F8AC3A"
                                    d="M294.308 431.418a1 1 0 001 1h49.384a1 1 0 001-1c0-14.276-11.514-25.864-25.692-25.864s-25.692 11.588-25.692 25.864z"
                                ></path>
                                <path
                                    fill="#F39404"
                                    d="M330.288 407.715a25.893 25.893 0 0112.129 21.965 1 1 0 01-1 1h-47.098c-.007.245-.011.491-.011.738a1 1 0 001 1h49.384a1 1 0 001-1 25.888 25.888 0 00-15.404-23.703z"
                                ></path>
                                <ellipse
                                    cx="309.35"
                                    cy="421.443"
                                    fill="#F39404"
                                    rx="1.29"
                                    ry="1.053"
                                    transform="matrix(.9688 0 0 1.2129 8.034 -93.183)"
                                ></ellipse>
                                <ellipse
                                    cx="309.35"
                                    cy="421.443"
                                    fill="#F39404"
                                    rx="1.29"
                                    ry="1.053"
                                    transform="matrix(.9688 0 0 1.2129 15.774 -85.78)"
                                ></ellipse>
                                <ellipse
                                    cx="309.35"
                                    cy="421.443"
                                    fill="#F39404"
                                    rx="1.29"
                                    ry="1.053"
                                    transform="matrix(.9688 0 0 1.2129 33.3 -94.48)"
                                ></ellipse>
                                <ellipse
                                    cx="309.35"
                                    cy="421.443"
                                    fill="#F39404"
                                    rx="1.29"
                                    ry="1.053"
                                    transform="matrix(.9688 0 0 1.2129 17.412 -96.013)"
                                ></ellipse>
                                <ellipse
                                    cx="309.35"
                                    cy="421.443"
                                    fill="#F39404"
                                    rx="1.29"
                                    ry="1.053"
                                    transform="matrix(.9688 0 0 1.2129 25.816 -89.637)"
                                ></ellipse>
                            </g>
                        </g>
                    </svg>
                </Box>
            </Stack>

        </Box>
    )
}






























// function IndexLoader() {
//     return (
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L288,128L576,0L864,224L1152,96L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg> */ }
<Box>
    {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg> */}

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,128C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
</Box>
//     )
// }