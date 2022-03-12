import styled from "styled-components";

export const Wrapper = styled.div`
        width: 100vw;
        height: 100vh;
        position: relative;
        padding: 0 1rem;
        .nav-bar{
            position: relative;
            display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 1rem;
        box-shadow: 0px 5px 10px 0px;
        z-index: 110;
    }
    .btn-container{
        margin-left: auto;
        @media (max-width: 700px){
            display: none;
        }
    }
    .menu-btn{
        margin-left: auto;
    }

    .hero-img{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 50vw;
        height: 100vh;
        object-fit: cover;
        
    }
    .btn-link{
        text-decoration: none;
    }
    .btn-body{
        margin: 5rem 8rem 0;
        @media (max-width: 700px){
             margin: 5rem 8rem 0;
         }
    }
    @media (max-width: 700px){
        .btn-container{
            display: none;
            order: 3;
            margin: 0 auto;
            
        }
        .menu-btn{
        display: block;
    }
    .btn-body{
        margin-top: 1rem;
    }
    }

`


export const Text = styled.div`
margin-top: 5rem;
.heading{
color:var(--background-blue);
text-transform: capitalize;
margin-top: 1rem;
font-size: 2.5rem;
}
.sub-heading{
    color:var(--background-blue);
    opacity: 0.7;
    text-transform: capitalize;
    font-size: 1.5rem;
margin: 1rem 0 0.2rem;
padding-right: 12rem;
}
.text{
    color: var(--primary-color2);
    padding-right: 45rem;
    font-size: 1.2rem;
}
@media (max-width: 700px){
    .heading{
margin-top: 1rem;
font-size: 2rem;
word-spacing: 1.5rem;
letter-spacing: 0.25rem;
padding-right: 20rem;
}
.sub-heading{
    font-size: 1.2rem;
margin: 0.7rem 0 0.2rem;
padding-right: 20rem;
}
.text{
    padding-right: 20rem;
    font-size: 1rem;
}
}
`

export const Button = styled.button`
width: max-content;
padding: 0 1rem;
height: 1.5rem;
border-radius: 1rem;
border: none;
font-size: 1.15rem;
background-color: transparent;
color: yellowgreen;
margin: 0.5rem;
cursor: pointer;
&.btn-start,&.btn-log{
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(35deg,var(--primary-color) ,var(--background-blue) 80% ) ;
    color: #fff;
    text-decoration: none;
    padding: 2rem;
    width: 20rem;
    height: 2.5rem;
    margin-bottom: -0.5rem;
    text-transform: capitalize;
    @media (max-width: 700px){
        transform:translateX(-5rem);
        padding: 0.5rem;
        width: 7rem;
        height: 3rem;
        font-size: 0.5rem;
    }
    &:hover{
        background: linear-gradient(35deg,var(--background-blue), var(--primary-color)80% ) ;
        cursor: pointer;
    }
    &:active{
        box-shadow: inset 0px 10px 10px rgba(0,0,0,0.7); 
        font-weight: bold;
    }
}
`