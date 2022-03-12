import React from 'react';
import { Link } from 'react-router-dom';
import {Wrapper,Card, CardContent,CardsBox, Button} from './Dashboard.styles';
import Foto1 from '../../images/adam-bartoszewicz-lNFfYtrbkRM-unsplash.jpg';
import Foto2 from '../../images/green.jpg';
import Foto3 from '../../images/purple.jpg';
import Login from '../Login';
import GlobalStyle from "../../GlobalStyles";
import useToken from '../../useToken';


export default function Dashboard() {
    const { token, setToken } = useToken();

    if(!token) {
    return (
      <>
      <GlobalStyle/>
      <Login setToken={setToken} />
      </>
    )
  }
    return (
        <Wrapper>
            <h2>packages</h2>
            <p>All plans cover a 3 times daily supply of food and weekly check-up</p>
            <CardsBox>
                <Card>
                    <div className='front'>
                    <CardContent>
                        <div className='image-container'>
            <img className='foto' src={Foto1}/>
                        </div>
                        <h3 className='subscription'>monthly<span>subscription</span></h3>
                        <h4 className='cost'>Cost: #75,000</h4>
                        <p className='duration'>duration: 30days</p>
                    </CardContent>
                    </div>

                    <div className='back'>
                    <CardContent>
                        <h3>join Us <span>today</span></h3>
                        <p>the path to a healthier life...</p>
                        <Link to='/payment'>
                        <Button>
                            subscribe
                        </Button>
                        </Link>
                    </CardContent>
                    </div>
                </Card>
                <Card className='card2'>
                    <div className='front'>
                    <CardContent>
                        <div className='image-container'>
            <img className='foto' src={Foto2}/>
                        </div>
                        <h3 className='subscription'>6Months<span>subscription</span></h3>
                        <h4 className='cost'>Cost: #425,000</h4>
                        <p className='duration'>duration: 180days</p>
                    </CardContent>
                    </div>

                    <div className='back'>
                    <CardContent>
                        <h3>join Us <span>today</span></h3>
                        <p>the path to a healthier life...</p>
                        <Link to='/payment'>
                        <Button>
                            subscribe
                        </Button>
                        </Link>
                    </CardContent>
                    </div>
                </Card>
                <Card className='card3'>
                    <div className='front'>
                    <CardContent>
                        <div className='image-container'>
            <img className='foto' src={Foto3}/>
                        </div>
                        <h3 className='subscription'>yearly<span>subscription</span></h3>
                        <h4 className='cost'>Cost: #850,000</h4>
                        <p className='duration'>duration: 365days</p>
                    </CardContent>
                    </div>

                    <div className='back'>
                    <CardContent>
                        <h3>join Us <span>today</span></h3>
                        <p>the path to a healthier life...</p>
                        <Link to='/payment'>
                        <Button>
                            subscribe
                        </Button>
                        </Link>
                    </CardContent>
                    </div>
                </Card>
               
            </CardsBox>

        </Wrapper>
    );
}
