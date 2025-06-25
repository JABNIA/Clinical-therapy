import styled from "styled-components";


export const HeaderWrapper = styled.header`
    position: relative;
    height: 300px;
    width: 60%;
    margin: auto;
    background-color: var(--teriary);
    background-image: url("/assets/images/anna-margishvili.jpg");
    background-size: cover;
    background-repeat: no-repeat;

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

export const HeaderTabletWrapper = styled.header`
    position: relative;
    height: 300px;
    width: 100%;
    margin: auto;
    background-color: var(--teriary);
    background-image: url("/assets/images/anna-margishvili.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    h1{
        position: absolute;
        bottom: 10px;
        left: 20px;
        text-align: right;
        color: white;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
    }

    .signature{
        font-size: 32px;
        font-family: Passions, Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: rgb(255, 255, 255);
    }
`

export const HeaderMobileWrapper = styled.header`
 position: relative;
    height: 300px;
    width: 100%;
    margin: auto;
    background-color: var(--teriary);
    background-image: url("/assets/images/anna-margishvili.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 20% center;

    h1{
        position: absolute;
        bottom: 10px;
        left: 20px;
        text-align: right;
        color: white;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
    }

    .signature{
        font-size: 32px;
        font-family: Passions, Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: rgb(255, 255, 255);
    }
`