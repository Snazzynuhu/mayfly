import styled from "styled-components";

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
text-align: center;
padding: 0 1rem;
margin-top: 7rem;
h2{
    color: green;
    font-size: 3rem;
    text-transform: capitalize;
}
p{    
    color: orange;
    font-size: 1.2rem;
    margin-bottom: 3rem;
}
`
export const CardsBox = styled.div`
display: flex;
justify-content: center;
align-items: center; 
@media (max-width: 600px){
    flex-direction: column;
}
`

export const Card = styled.div`
width: 15rem;
height: 15rem;
border-radius: 1rem;
padding: 1.5rem;
line-height: 1.5;
perspective: 150rem;
position: relative;
z-index: 1;
margin: 1rem;
box-shadow: 0px 1px 5px 1px grey;
&.card2{
    .front{
        .subscription{
            color: yellowgreen;
            text-decoration:italic;
            text-transform: capitalize;
        }
    }
    .back{
        background-image:  linear-gradient(to bottom right, transparent, greenyellow);
         h3{
        text-transform: capitalize;
        color: black;
    }
    p{
        color: rgba(0,0,0,0.3);
    }
    }
}
&.card3{
    .front{
        .subscription{
            color: purple;
            text-decoration:italic;
            text-transform: capitalize;
        }
    }
     .back{
        background-image:  linear-gradient(to bottom right, transparent, purple);
    }
}
.front{
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    background-color: #fff;
    position: absolute;
    top:0;
    left: 0; 
    z-index: 5;
    transition: all 0.5s ease;
    backface-visibility: hidden;
}
.back{
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    background-image: linear-gradient(to bottom right,transparent,crimson);
    position: absolute;
    z-index: 3;
    top:0;
    left: 0; 
    display:grid;
    place-items: center;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all 0.5s ease;
    h3{
        text-transform: capitalize;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 200;
        word-spacing: 2px;
        letter-spacing: 2px;
    }
    p{
        color: rgba(0,0,0,0.3);
        font-size: 0.5rem;
        margin-top: -0.8rem;
    }
}
&:hover .front{
    transform: rotateY(-180deg);
    cursor: pointer;
}
&:hover .back{
    transform: rotateY(0);
    cursor: pointer;
}
Button{
    padding: 0.5rem;
    background-color: #fff;
    text-transform: capitalize;
    width: 7rem;
    height: 2.5rem;
    border:none;
    border: 3px solid orange;
    color: orange;
    border-radius: 1rem;
    cursor: pointer;
    position: relative;
}
Button::before{
    position:absolute;
    top: -3px;
    left: -2px;
    display: block;
    /* z-index: 5; */
    content: "subscribe";
    width: 7rem;
    height: 0;
    border-radius: 1rem;
    padding: 0.7rem;
    background-color: orange;
    opacity:0;
    transition: all 0.5s ease-in;
}
Button:hover::before{
    height: 2.5rem;
    opacity:1;
    color: white;
}

`
export const CardContent = styled.div`
        line-height: 2;
        .subscription{
            color:crimson;
            text-decoration:italic;
            text-transform: capitalize;
             font-weight: 200;
                font-size: 1.7rem;
                span{
                    display: inline-block;
                    color:orange;
                    text-transform: capitalize;
                    font-size: 0.4em;
                }
            }
            .cost{
                color: grey;
            }
            .duration{
            text-transform: capitalize;
        }
  .image-container{
        width: 15rem;
        height: 6rem;
        background-size:cover;     
        margin-bottom: 0.5rem;
        .foto{
            width:100%;
            height:100%;
            border-top-left-radius:1rem;
        border-top-right-radius:1rem;
            object-fit:cover;
        }
    }
`
export const Button = styled.button``