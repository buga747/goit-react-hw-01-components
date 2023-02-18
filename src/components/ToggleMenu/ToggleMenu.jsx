import React, { Component } from "react";
import { Container, Button, Menu, List } from "./ToggleMenu.styled";
class ToggleMenu extends Component {

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}))
    }

    render() {
        const { isOpen } = this.state;

        return <Container>
            <Button onClick={this.toggle} type='button'>{isOpen ? 'Hide menu' : 'Show menu'}</Button>

            {isOpen &&  <Menu>
                <List>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>

                </List>
            </Menu>}
           
        </Container>
    }
}

export default ToggleMenu;