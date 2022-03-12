import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.8);
display: grid;
place-items: center;
`

export const Content = styled.div`
width: 20rem;
height: 10rem;
background-color: #fff;
display:flex;  
justify-content: center;
align-items: center;
border-radius: 1rem;
position: relative;

`

export const Text = styled.div`
color: #222;
h1{
    margin-top: -2.5rem;
}
.modal-content{
    color: grey;
    margin: 0.5rem 0 1rem;
    padding: 0 2rem;
}
`

export const Button = styled.button`
background-color: #fff;
color: red;
border: none;
padding: 0.2rem;
border-radius: 0.5rem;
position:absolute;
top: 0.5rem;
right: 0.5rem;
&.proceed{
    width: max-content;
background-color: var(--secondary-color);
color: #fff;
text-transform: capitalize;
padding: 0.5rem 1.2rem;
border: none;
border: 1px solid grey;
border-radius: 1rem;
position:absolute;
top: 60%;
left: 37%;
&:hover{
    background-color: darkgreen;
    cursor: pointer;
}
}

&:hover{
    background-color: red;
color: #fff;
cursor: pointer;
}

`