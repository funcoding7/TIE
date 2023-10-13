import React from "react";
import { Wrapper, Content, Text } from "./header.styles";
const Header = () =>
(
    <Wrapper>
        <Content>
            <Text>
                <h2>TechTune Motors</h2>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </Text>
        </Content>
    </Wrapper>
);


export default Header;