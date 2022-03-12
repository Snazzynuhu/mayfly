import styled from "styled-components";

export const Wrapper = styled.div`
        .navbar{
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            width: 100%;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 1rem;
        box-shadow: 0px 5px 10px 0px;
        z-index: 110;
    }
    .navbar>.logo{
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 2rem;
    }
    .btn-container{
        margin-left: 23.5rem;
        @media (max-width: 700px){
            display: none;
        }
    }
    .menu-btn{
        margin-left: auto;
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
    }

`

// ASIDE BAR
export const Aside = styled.div`
display: none;
position: absolute;
top: 2.5rem;
left: 0;
z-index: 100;
@media (max-width: 700px){
    display: block;
}
.sidebar{
    height: 0;
    opacity: 0.7;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: max-content;
    background-color:var(--background-blue);
    padding: 0.5rem 3rem;
    box-shadow: 0px 5px 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 5rem;
    transition: all 0.5s ease-in;
    Button{
        color: var(--primary-color);
        transition: all 0.5s linear;
        &:hover{
            color: black;
        }
    }
}
.show-sidebar{
    height: auto !important;
    overflow: auto;
    opacity: 1;
    transition: all 0.5s ease-in;
}
`
// ASIDE BAR END

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
&.log,&.sign{
    /* color: rgb(54, 70, 131); */
    color: var(--primary-color);
}
&.about,&.review{
    color: var(--primary-color);
}
&:hover{
    background-color: rgba(255,255,255,0.5);
    color: green;
}
&.menu{
    color: var(--primary-color);
    border: 1px solid grey;
    display: none;
    &:hover{
        color: var(--primary-color2);
        color: var(--background-blue);
    }
@media (max-width: 700px){
    display: block;
}
}

`

