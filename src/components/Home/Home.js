import React, { useState } from 'react';
import {Wrapper, Text, Button, Aside} from './Home.styles';
import {Link} from 'react-router-dom';
import HeroImage from '../../images/monika.jpg';

const Home=()=>{
    
    

    return (
        <Wrapper>
            <img src={HeroImage} className='hero-img'/>
            <Text>
                <h1 className='heading'>welcome to  mayflydoc</h1>
                <h2 className='sub-heading'>An  investment in health pays the best   interest...</h2>
                <p className='text'>if you are just     beginning to learn about your health and    have become conscious about your food  intake.mayflydoc will be your life-time  partner.</p>
            </Text>
            <div className='btn-body'>

                <Link to='./dashboard' className='btn-link'>
                    <Button className='btn-log'>Log In</Button>
                    </Link> <br/>
                    <Link to='./signup' className='btn-link'>
                    <Button className='btn-start'>get started</Button>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Home;