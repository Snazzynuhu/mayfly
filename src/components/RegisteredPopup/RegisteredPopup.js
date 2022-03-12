import React from 'react';
import {Wrapper, Content, Text, Button} from './RegisteredPopup.styles';
import {Link} from "react-router-dom";


export default function RegisteredPopup({registeredModal, setRegisteredModal}) {

    return (
        <>
        {registeredModal.show &&
        <Wrapper>
            <Content>
                <Text>
                    <h1>{registeredModal.heading}</h1>
                    <p className='modal-content'>{registeredModal.content}</p>
                    {registeredModal.proceedCTA && <Link to='../dashboard'>
                    <Button className='proceed'>proceed</Button>
                    </Link>}
                </Text>
                <Button onClick={()=> setRegisteredModal({...registeredModal,show:false})}>
                    X
                </Button>
            </Content>
        </Wrapper>}
        </>
    )
}
