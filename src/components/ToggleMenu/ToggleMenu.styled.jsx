import styled from "styled-components";

export const Container = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
    width: 200px;
    height: auto;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: aquamarine;
    padding: 12px;

    &:hover {
        background-color: orange;
    }
`

export const Menu = styled.div`
position: relative;
        border: 1px solid tomato;
`

export const List = styled.ul`
    list-style-type: none;
    padding: 10px;
    background-color: yellowgreen;
`