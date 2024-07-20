import { Box } from "@mui/material"
import { Stack, Typography } from '@mui/material';

export default function Hero({ isLoading }) {

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