import React, { useState } from "react";
import { Container, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Cart from './cart'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

    const [cartItems, setCaretItems] = useState(0);
    const [openCart, setOpenCart] = useState(false);


    return (
        <Nav style={{ position: 'sticky', top: 0, zIndex: 1 }} sticky="top" bg="light" variant='dark' class="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Nav>
                    <h2>Fullhaus Shop</h2>
                </Nav>
                <Nav>
                    <DropdownButton variant='dark' title='Cart' onClick={() => {
                        setOpenCart(!openCart)
                    }}>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Container>
            <div>
            </div>
        </Nav>
    )
};

export default Header;