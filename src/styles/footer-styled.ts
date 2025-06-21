import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 60%;
    margin: auto;
    padding: 0px 32px;
    background-color: var(--secondary);
    color: var(--text2);


    .main {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px 40px;
    }

    .contact-info{
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 500;
        line-height: 15px;
        font-size: 16px;
    }

    .contact-headings{
        margin-bottom: 15px;
        font-family: Numans, 'Open Sans', sans-serif;
    }

    .copyright{
        text-align: center;
        font-size: 14px;
        color: var(--text2);
        border-top: 1px solid var(--border);
        font-family: Lexend, Arial, Helvetica, sans-serif;
    }

    .socials{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
    }

    .icon{ 
        width: 30px;
        height: 30px;
    }
    
    p {
        margin: 0;
        font-size: 14px;
        color: #333;
    }
`