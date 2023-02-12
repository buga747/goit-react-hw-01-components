

import styled from "@emotion/styled";

export const Table = styled.table`
    width: 480px;
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;

 

    th{
    border: 1px solid #ddd;
    padding: 12px 8px;
    background-color: #00BCD5;
    color: white;
}

  td {
    border: 1px solid #ddd;
    padding: 8px;
    color: black;
    text-transform: capitalize;
    }

    tr:nth-child(even){
        background-color: #f2f2f2;
    }
}
`



