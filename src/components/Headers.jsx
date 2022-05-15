import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const Container = styled.div`
  min-height :60px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 0 20px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width:768px){
    display:none;
  }
  
`
const Right = styled.div`
   a {
    font-weight: 600;
    text-transform: uppercase;
 
    margin-right: 10px;

  }
  display: flex;
  align-items: center;
  
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const Headers = () => {
  return (
    <Container>
        <a>
          <img src="/images-tesla/images/logo.svg" alt=""/>
          
        </a>
        <Menu>
         <a href = "#">Model S</a>
         <a href = "#">Model 3</a>
         <a href = "#">Model Y</a>
         <a href = "#">Model X</a>
        </Menu>
        <Right>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu/>
        </Right>
    </Container>
  )
}

export default Headers