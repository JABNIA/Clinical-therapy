import styled from "styled-components";

export const AdminWrapper = styled.section`

    table{
        width: 80%;
        margin: auto;
        border: 2px solid black;
        border-collapse: collapse;
    }
    th{
        border: 2px solid black;
        font-family: Lexend;
    }
    tr{
        min-height: 40px;
    }
    td{
        min-height: 40px;
        border: 2px solid black;
        text-align: center;
        font-family: Numans, 'Courier New', Courier, monospace;
    }
    .table-data{

    }
    .visit-passed{
        cursor: pointer;
        color: green;
    }
    .terminate{
        color: red;
        cursor: pointer;
    }

    .visited * {
        border: 2px solid green;
        color: green;
    }

    .terminated * {
        border-color: 2px solid red;
        color: red;
    }
`