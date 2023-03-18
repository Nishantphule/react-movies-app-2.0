import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {API} from "../global"
import LoginIcon from '@mui/icons-material/Login';

export default function SignUp() {
  const navigate = useNavigate();
  const [Add, setUser] = useState({ username:"",password:"" ,email:"" });

  const newUser = (add) => {
    fetch(`${API}/users/signup`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then(() => navigate("/"));
  };
  return (
    <div>
      <div className='add-User'>
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, username: e.target.value }))} label="Enter your username" variant="filled" />
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, password: e.target.value }))} label="Password" variant="filled" />
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, email: e.target.value }))} label="Email" variant="filled" />
      <Button style={{ width: "80%" }} className="add" onClick={() => newUser(Add)} variant="contained">Signup</Button>
      <p>If you already have an account ?<Button><LoginIcon onClick={() => navigate("/login")}/></Button></p>
    </div>
    </div>
  )
}
