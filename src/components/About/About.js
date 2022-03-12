import React from 'react';
import { Wrapper, Content } from '../About/About.styles';


export default function About() {
  return(
    <Wrapper>
            <h1 className='heading'>about <span>us</span> </h1>
            <div className='underline'></div>
            <Content> 
            <p>We accomplish what the pharmaceutical companies are trying to achieve but with the use of natural products with little or no side effects. The cure for all illness has already been provided by nature, all we have to do is look in the right places</p>
            <p>There is a saying among naturopatist that goes: <q>If it is made of plant,it is best for you, but if it is made in a plant(factory), it is probably harmful.</q></p>
            <p>Embrace nature today and live your best life. It never too late to live healthy</p>
            </Content>
        </Wrapper>
  );
}