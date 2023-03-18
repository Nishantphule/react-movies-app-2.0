import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {API} from "../global"

export default function Login() {
  const navigate = useNavigate();
  const [Add, setUser] = useState({ username:"",password:"" });


  const newUser = (add) => {
    fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then(() => Navigate("/movies"));
  };
  return (
    <div>
      <div className='add-User'>
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, username: e.target.value }))} label="Enter your username" variant="filled" />
      <TextField className="input"  id="filled-basic" onChange={(e => setUser({ ...Add, password: e.target.value }))} label="password" variant="filled" />
      <Button style={{ width: "80%" }} className="add" variant="contained" onClick={() => newUser(Add)}>Login</Button>
      <Button onClick={() => navigate("/signup")}>Create an account</Button>
    </div>
    </div>
  )
}
