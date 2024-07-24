import styled from "@emotion/styled";
import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import axios from "axios";
import { useRef, useState } from "react";
import { Form, useActionData, useSubmit } from "react-router-dom";
// import { mealAxios } from "src/api/services";


export async function createMealAction({ request }) {
    let formData = await request.formData();
    let response = null;

    console.log('action-main', request, ...formData);
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    try {

        await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        const res = await axios.post(`${__API_URL__}/api/admin/meals`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Accept": "application/json"
            }
        });

        response = res.data;
    } catch (error) {
        console.error(error);
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
    }

    return data;
}

export default function AdminAddMeal() {
    return (
        <Box paddingBlockStart={2} paddingBlockEnd={2}>
            <Box minHeight={100} bgcolor={'red'} borderRadius={1} marginBlockEnd={2}></Box>
            <MealForm />
        </Box>
    )
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function MealForm() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [isVeg, setIsVeg] = useState('');
    const [price, setPrice] = useState('');

    const imgInputRef = useRef(null);
    const actionData = useActionData();
    let submit = useSubmit();
    console.log('action', actionData);

    function validateForm(params) {

    }



    function handleSubmit(e) {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("slug", slug);
        formdata.append("title", title);
        formdata.append("description", desc);
        formdata.append("featured_img", imgInputRef.current.files[0], imgInputRef.current.files[0].name);
        formdata.append("is_veg", "0");
        formdata.append("price", price);


        submit(formdata, {
            method: "POST",
            action: "/admin/meal",
            encType: "multipart/form-data"
        });

        console.log(...formdata);
        console.log(e);
        console.log(name);
        console.log(imgInputRef.current.files);
    }

    return (
        <Box component={'form'} encType="multipart/form-data" onSubmit={handleSubmit} action="/admin/meal" method="POST" display="flex" flexDirection="column" gap={2} bgcolor={'#FFFFFF'} paddingBlockStart={2} paddingBlockEnd={1} paddingInline={2}>
            <TextField type="text" required label="Meal Name" name="name" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
            <TextField required placeholder="chicken-kadai" name="slug" onChange={e => setSlug(e.target.value)} value={slug} label="Meal Slug" variant="outlined" />
            <TextField required label="Meal Title" name="title" onChange={e => setTitle(e.target.value)} value={title} variant="outlined" />
            <TextField required multiline label="Enter Description" name="description" onChange={e => setDesc(e.target.value)} value={desc} minRows={4} maxRows={10} variant="outlined" />
            <TextField required name="price" onChange={e => setPrice(e.target.value)} label="Enter price" placeholder="0.0$" value={price} variant="outlined" />

            <FormControlLabel name="is_veg" control={<Checkbox name="is_veg" value={'1'} />} value={true} label="IS VEG" />

            {/* <Button
                
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
                
            >
                Upload file
                <VisuallyHiddenInput name="featured_img" type="file" />
            </Button> */}

            <Box>
                {/* isImgSelected  */}
                {/* && */}
                {/* <img src="" alt="" srcset="" />  */}
            </Box>

            <input type="file" name="featured_img" id="" ref={imgInputRef} />

            <Button variant="contained" color="primary" type="submit">
                Post
            </Button>
        </Box>
    )
}
