import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/carSlice';
import { useSelector } from 'react-redux';


const Container = styled.div`
  min-height :60px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #eee; */
  padding: 0 20px;
  z-index: 1;
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
const BurgerNav = styled.div`

  background-color: white;
  position: fixed;
  right:0;
  top:0;
  bottom:0;
  z-index: 100;
  width:300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li{
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 15px 0;
    a{
      font-weight: 600;
    }
  }
  transform:${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 0.2s ease-in-out;

`
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CustomCloseBtn = styled(CloseIcon)`
  cursor: pointer;
`
const Headers = () => {

  const cars = useSelector(selectCars);
  console.log(cars)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Container>
      <a>
        <img src="/images-tesla/images/logo.svg" alt="" />

      </a>
      <Menu>
        {cars && cars.map((car, ind) => (

          <a key={ind} href="#">{car}</a>
        ))}
        {/* <a href = "#">Model 3</a>
         <a href = "#">Model Y</a>
         <a href = "#">Model X</a> */}
      </Menu>
      <Right>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={toggle} />
      </Right>
      <BurgerNav show={sidebarOpen} >
        <Close>
          <CustomCloseBtn onClick={toggle} />

        </Close>
        {cars && cars.map((car, ind) => (

         <li> <a key={ind} href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        {/* <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li> */}
      </BurgerNav>
    </Container>
  )
}

export default Headers