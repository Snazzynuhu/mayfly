import styled from "styled-components";

export const Footer = styled.div`
position: fixed;
bottom: 0;
left: 0;
text-align: center;
width: 100vw;
color: var(--background-blue2);
height: max-content;
z-index: 5;
footer{
    .contact{
        display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom:0.5rem;
    }
    background-color: var(--primary-color2);
    padding: 0.2rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    text-align: center;
  p{margin-right: 1rem;}
}
`