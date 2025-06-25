import styled from "styled-components";

export const AdminWrapper = styled.section`


    h2 {
        margin: 20px auto;
        text-align: center;
        font-family: Numans, Arial, Helvetica, sans-serif;
    }
    .table-container {
        height: 250px;
        overflow-y: auto;
        scrollbar-width: none;
    }

    .table-container::-webkit-scrollbar{
        display: none
    }
    table{
        width: 80%;
        margin: auto;
        border-collapse: collapse;
    }
    th{
        font-family: Lexend;
        border: 2px solid black;
    }
    tr{
        min-height: 40px;
        border: 2px solid black;
    }
    td{
        max-width: 200px;
        min-height: 40px;
        text-align: center;
        font-family: Numans, 'Courier New', Courier, monospace;
        border: 2px solid black;
        
    }

    .visited-th{
        border: 2px solid green;
    }
    .visited-td{
        border: 2px solid green;
    }
    .terminated-th{
        border: 2px solid #aa1717;
    }
    .terminated-td{
        border: 2px solid #aa1717;
    }
`