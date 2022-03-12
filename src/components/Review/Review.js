import React,{useEffect, useState} from 'react';
import {Wrapper, Content} from './Review.styles';
import reviews from './data';
import image1 from '../../images/green.jpg';
import image2 from '../../images/purple.jpg';
import image3 from '../../images/pineapple-yellow-green.jpg';

export default function Review() {
    const [index, setIndex] = useState(0);
    const [people, setPeople] = useState(reviews);

    
    const {name, job, text, image} = people[index];

    const checkNum =(num)=>{
        if(num > reviews.length-1){
        return 0;
    }
    else if(num < 0){
        return reviews.length -1;
    }else{
        return num;
    }
    };

    // useEffect(()=>{
    //     setInterval(() => {
    //     setIndex(prevIndex=> checkNum(prevIndex + 1));
    //     }, 3000);
    // },[]);

    const nextPerson=()=>{
        setIndex(prevIndex=> checkNum(prevIndex + 1));
    }
    const prevPerson=()=>{
        setIndex(prevIndex=> checkNum(prevIndex - 1));
        
    }

    
    return (
        <Wrapper>
            <h1 className='heading'>OUR REVIEWS</h1>
            <div className='underline'></div>
            <p className='subtitle'>These are what our customers have to say about us</p>
            <Content>
            <img src={image} alt={`${name}'s image`} style={{width: '200px',height:'200px', borderRadius: '1rem', marginTop: '2rem'}} />
            <h2 className='name'>{name}</h2>
            <h3 className='job'>Retired {job}</h3>
            <p className='text'>{text}</p>
            <div className='btn-container'>
                <div className='left-arrow'
                onClick={prevPerson}
                >&nbsp;</div>
                <div className='right-arrow'
                onClick={nextPerson}
                >&nbsp;</div>
            </div>
            </Content>
        </Wrapper>
    )
}
