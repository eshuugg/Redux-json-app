import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {  getSingleUser, updateUser } from '../redux/action';


const EditUser = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });

    const [error, setError] = useState("")

    let navigate = useNavigate();

    let dispatch = useDispatch();

    const { name, email, contact, address } = state

    const {id} = useParams();

    const {user} = useSelector((state) => state.data)

    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])

    useEffect(() =>{
        if(user){
            setState({...user})
        }
    },[user])

    const handleInput = (e) =>{
        let {name, value} = e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!name || !address || !contact || !contact){
        setError("Please provide all input fields");
        } else {
            dispatch(updateUser(state,id));
            navigate("/");
            setError("");
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Button
                    sx={{ width: "100px" }}
                    variant='contained'
                    color="secondary"
                    onClick={()=> navigate("/")}
                >
                  Go Back  
                </Button>
                <h2>Edit User</h2>
                {error && <h3 style={{color:"red"}}>{error}</h3>}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    name='name'
                    value={name || ""}
                    type="text" 
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name='email'
                    value={email || ""}
                    type="email"
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Contact"
                    variant="standard"
                    name='contact'
                    value={contact || ""}
                    type="number" 
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    name='address'
                    value={address || ""}
                    type="text" 
                    onChange={handleInput}
                    />
                <br />

                <Button
                    sx={{ width: "100px" }}
                    variant='contained'
                    color="primary"
                    type="submit"
                    onChange={handleInput}

                >
                    Update
                </Button>

            </Box>
        </div>
    )
}

export default EditUser;