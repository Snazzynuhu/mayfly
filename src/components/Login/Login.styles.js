import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100vw;
height: 100%;
`  

export const Content = styled.div`
text-align:center;
margin-top: 5rem;
`

export const Button = styled.button`
display: block;
width: 15rem;
height: 2.2rem;
color: var(--secondary-color);
text-transform: capitalize;
font-size: 1.2rem;
border: none;
border: 1px solid var(--secondary-color);
background: var(--white-color);
margin: 0 auto 1rem;
border-radius: 1rem;
cursor: pointer;
transition: all 1s;
&:hover{
    background-color: var(--secondary-color);
    color: var(--white-color);
    font-weight: 500;
}
`

export const Text = styled.div`
text-align:center;
margin-bottom: 1.5rem;
line-height: 1.5;
h1{
    display: block;
    background-image: linear-gradient(to bottom right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    animation: slidedown 3s ease-in;
    color:green;

    @keyframes slidedown{
        0%{transform:translateY(-100px); opacity: 0.2;};
        20%{transform:translateY(20px);opacity: 0.5;};
        100%{transform:translateY(0); opacity: 1;};
    }
}
p{
    color: var(--primary-color);
    font-weight: bold;
    // text-transform: capitalize;
}
`
export const Form = styled.form`
display:block;
`;

export const InputFormat = styled.div`
margin-bottom: 1rem;
label{
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--primary-color);
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
input{
    width: 50vw;
    height: 0.5rem;
    padding: 1.5rem 0.5rem;
    font-size: 1.1rem;
    border: none;
    box-shadow: 0px 0.1rem 1px  green;
}
 input:focus{
        outline: 1px solid green;
    }
.password-input{
    width: 50vw;
    background-color: white;
    box-shadow: 0px 0.1rem 1px  green;
}

`;