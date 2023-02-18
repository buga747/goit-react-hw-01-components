import styled from '@emotion/styled';

export const FriendStatus = styled.span`
    width: 10px;
    height: 10px;    
    border-radius: 50%;

    background-color: ${getBgColor}
   
`

function getBgColor(props) 
    {
        if (props.isOnline) {
            return `green`;
        } else {
            return `red`;
    }}


export const Avatar = styled.img`
display: block;
background-color: pink;
border-radius: 10%;
`

export const Name = styled.p`
font-size: 700;
line-height: 1.3;
`



