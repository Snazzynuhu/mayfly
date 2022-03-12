import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    position: relative;
    padding: 3rem 0;
    margin-top: 5rem;
    .heading{
        font-size: 2rem;
    }
   
    .underline{
        width: 8rem;
        height: 0.3rem;
        background-color: var(--primary-color2);
        text-align: center;
        margin: 0.5rem auto;
    }
    .subtitle{
        display: inline-block;
        background-color: var(--background-blue);
        color: #fff;
        font-size: 1.3rem;
        padding: 0.5em 1em;
        border-radius: 0.5em;
    }
    
`
export const Content= styled.div`
position: relative;
width: 50vw;
height: max-content;
padding: 3rem;
background-color: rgba(255,255,255,0.3);
border: 1px solid #fff;
border-radius: 1rem;
margin: 1.5rem auto 3rem;
@media (max-width: 700px){
    padding: 1rem 1.5rem 7rem;
    margin: 1.5rem auto;
}
 .name{
        font-size: 1.5rem;
    }
    .job{
        font-size: 1.3rem;
        font-weight: 400;
        letter-spacing: 3px;
        opacity: 0.7;
    }
    .text{
        font-size: 1.2rem;
        margin-top: 0.5em;
    }
    .btn-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%); 
    }
    
    .btn-container>.left-arrow{
        display: inline-block;
        position: relative;
        transform: translateX(-12rem);
        width: 0;
        height: 0;
        border: 2rem solid transparent;
        border-right-color: red;
        cursor:pointer;
    }
    .btn-container>.right-arrow{
        display: inline-block;
         position: relative;
        transform: translateX(12rem);
         width: 0;
        height: 0;
        border: 2rem solid transparent;
        border-left-color: green;
        cursor:pointer;
    }

`