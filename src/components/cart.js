import React from 'react';
import { Navbar, Container, Collapse, Button, CardGroup, Card } from "react-bootstrap";
import styled from "styled-components";


const SideCart = styled.div`
    height: 100%;
    width: 40vw;
    background-colour: black;
    &.expand {
        transition: all ease-in-out 0.3s;
        right: 0;
      }
      &.shrink {
        transition: all ease-in-out 0.3s;
        right: -400px;
      }
`;

const Cart = () => {
    return (
        <SideCart>

        </SideCart>
    )
}

export default Cart;