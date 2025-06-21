import styled from "styled-components";

export const TherapyWrapper = styled.section`
    width: 60%;
    margin: auto;
    padding: 30px 32px;
    background-color: var(--teriary);
    font-family: Lexend, Arial, Helvetica, sans-serif;
    color: var(--text2);
    
    .headline{
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 400;
    }
    .content{
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }

    ol{
        list-style-type: decimal;
        margin: 20px 30px;
    }

    li{
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }
`