import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';


const AddUser = () => {

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

    const handleInput = (e) =>{
        let {name, value} = e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!name || !address || !contact || !contact){
        setError("Please provide all input fields");
        } else {
            dispatch(addUser(state));
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
                <h2>Add User</h2>
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
                    value={name}
                    type="text" 
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name='email'
                    value={email}
                    type="email"
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Contact"
                    variant="standard"
                    name='contact'
                    value={contact}
                    type="number" 
                    onChange={handleInput}
                    />
                <br />

                <TextField
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    name='address'
                    value={address}
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
                    Submit
                </Button>

            </Box>
        </div>
    )
}

export default AddUser;