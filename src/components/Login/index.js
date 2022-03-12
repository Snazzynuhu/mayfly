import React,{useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../../App.css';
import {Wrapper, Content,Form,InputFormat, Text, Button} from './Login.styles';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Splash({setToken}) {
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();
        const token = await loginUser({
      fullName,
      password
    });
    setToken(token);
    }

    return (
        <Wrapper>
            <Content>
                <Text>
                    <h1>Logo:Mayfly-Doc</h1>
                    <p>Journey to a healthier life...</p>
                </Text>

                  <Form onSubmit={handleSubmit}>
                    <InputFormat>
                    <label htmlFor='fullName'>Full Name</label>
                    <input type='text' id='fullName' value={fullName} onChange={(e)=> setFullName(e.target.value)} />
                    </InputFormat>

                    <InputFormat>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </InputFormat>


                    <Button type='submit'>Log In</Button>
                </Form>

            </Content>
        </Wrapper>
    )
}

export default Splash

Splash.propTypes = {
  setToken: PropTypes.func.isRequired
}