import React from 'react';
import styled from 'styled-components'
import Section from './Section';

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model S"
            desc="Order Online For Touchless Delivery"
            image="/images-tesla/images/model-s.jpg"
            leftBtnTxt = 'Custom-order'
            rightBtnTxt = 'Existing inventory'
        />
        <Section
            title="Model Y"
            desc="Order Online For Touchless Delivery"
            image="/images-tesla/images/model-y.jpg"
            leftBtnTxt = 'Custom-order'
            rightBtnTxt = 'Existing inventory'    
        />
        <Section
            title="Model 3"
            desc="Order Online For Touchless Delivery"
            image="/images-tesla/images/model-3.jpg"
            leftBtnTxt = 'Custom-order'
            rightBtnTxt = 'Existing inventory'
        
        />
        <Section
            title="Model X"
            desc="Order Online For Touchless Delivery"
            image="/images-tesla/images/model-x.jpg"
            leftBtnTxt = 'Custom-order'
            rightBtnTxt = 'Existing inventory'
        
        />
        <Section
            title="Lowest Cost Solar Panel in America"
            desc="Money-back guarantee"
            image="/images-tesla/images/solar-panel.jpg"
            leftBtnTxt = 'Order now'
            rightBtnTxt = 'Learn more'
        
        />
        <Section
            title="Accessories"
            desc=""
            image="/images-tesla/images/accessories.jpg"
            leftBtnTxt = 'Shop now'
        />
        
        
    </Container>

  )
}

export default Home

const Container = styled.div`
    height:100vh;
`