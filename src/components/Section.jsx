import React from 'react';
import styled from 'styled-components';
//import ButtonGroup from './ButtonGroup';

const Wrap = styled.div`
    width: 100 vw;
    height: 100vh;
    background:orange;
    background-image: url('/images-tesla/images/model-s.jpg');
    background-size:cover ;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props=>`url(${props.bgImg})`};
`

const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    @media (max-width:760px) {
        flex-direction: column;
        align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color:white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color:black;
    opacity: 0.65;
`;

const DownArrow = styled.img`
    //margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
    
`

const Section = ( {title , desc , image ,leftBtnTxt , rightBtnTxt} ) => {
    return (
        <Wrap bgImg = {image}>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
            <Buttons>

                <ButtonGroup>
                    <LeftButton>
                        {leftBtnTxt}
                    </LeftButton>
                    <RightButton>
                        {rightBtnTxt}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src='/images-tesla/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section
