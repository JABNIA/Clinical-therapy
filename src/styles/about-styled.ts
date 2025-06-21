import styled from "styled-components";

 
export const AboutWrapper = styled.section`
    width: 60%;
    margin: auto; 
    padding: 30px 32px;
    background-color: var(--background);
    font-family: Lexend, Arial, Helvetica, sans-serif;
    
    ul {
        padding: 0px;
        list-style: none;
    }
    
    .headline{
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 400;
        text-align: right;
        padding: 0px 30px;
    }

    .about-content{
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        gap: 40px;
        flex-grow: 0;
    }

    .about-img{
        width: 250px; 
        display: block;
        border-radius: 8px;
        margin-right: 40px;
    }
`