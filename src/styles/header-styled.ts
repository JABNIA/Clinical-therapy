import styled from "styled-components";


export const HeaderWrapper = styled.header`
    position: relative;
    height: 300px;
    width: 60%;
    margin: auto;
    background-color: var(--teriary);
    background-image: url("./src/assets/images/anna-margishvili.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -550px;

    h1{
        position: absolute;
        bottom: 10px;
        left: 20px;
        text-align: right;
        color: white;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 400;
    }

    .signature{
        font-size: 50px;
        font-family: Passions, Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: rgb(255, 255, 255);
    }
`