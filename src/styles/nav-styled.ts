import styled from "styled-components";


export const NavWrapper = styled.nav`
    width: 60%;
    height: 60px;
    margin: auto;
    background-color: var(--secondary);

    ul{
        height: 100%;
        list-style: none;
        display: flex;
        gap: 50px;
        justify-content: center;
        align-items: center;
        padding: 0;

    }

    .nav-link {
        padding: 10px 20px;
        font-size: 20px;
        text-decoration: none;
        color: var(--text);
    }

    .nav-link:hover{
        border-bottom: 2px solid #FFFFFF;
        color: #FFFFFF;
    }

    .active {
        border-bottom: 2px solid #FFFFFF;
        color: #FFFFFF;
    }
`