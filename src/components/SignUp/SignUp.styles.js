import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
text-align:center;
position: relative;
margin-top: 7rem;
`;

export const Form = styled.form`
display:block;
padding: 2rem 0;
h3.title{
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--primary-color);
}
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
    &.male, &.female{
        border: 1px solid green;
        border-radius: 0.5rem;
        padding: 0.2rem 0.5rem;
        color: green;
        &:hover{
            background-color: green;
            color: #fff;
        }
    }
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
input[type='file']{
padding: 1rem 0.7rem 2rem;
}
input[type='radio']{
   width: 50vw;
    height: 0.5rem;
    padding: 1.5rem 0.5rem;
    font-size: 5rem;
    border: none;
    box-shadow: 0px 0.1rem 1px transparent;
}
input[type='radio']:focus{
        outline: 1px solid transparent;
    }
h4{
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--primary-color);
    text-transform: capitalize;
}
.password-input{
    width: 50vw;
    background-color: white;
    box-shadow: 0px 0.1rem 1px  green;
}

`;
export const Text = styled.div`
line-height: 1.35;
margin-bottom: 1.2rem;
h2{
color: var(--secondary-color);
text-transform: capitalize;
font-size: 3rem;
letter-spacing: 0.25rem;
}
h3{
    color: var(--secondary-color);
    opacity: 0.3;
    font-weight: 200;
    font-size: 1rem;
    word-spacing: 0.1rem;
    letter-spacing: 0.2rem;
    animation: swing 3s linear infinite;
    transition: animation 3s;
    backface-visibility: hidden;
    
    @keyframes swing{
        0%{transform: translateX(-30px);};
        50%{transform: translateX(30px);};
        100%{transform: translateX(0);};
    }
}
`;
export const Button = styled.button`
width: 50vw;
height: 2.5rem;
margin-bottom: 1rem;
font-size: 1.1rem;
text-transform: uppercase;
border: none;
color: var(--white-color);
border: 1px solid var(--white-color); 
background: var(--secondary-color);
border-radius: 1rem;
cursor: pointer;
transition: all 0.5s;
&.submit-btn{
    padding: 1.7rem;
    display: grid;
    place-content: center;
   margin: 0 auto 3rem;
}
&:hover{
    opacity: 0.8;
    font-weight: 500;
};

`