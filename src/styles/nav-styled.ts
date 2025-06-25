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

export const NavTabletWrapper = styled.nav`
    width: 100%;
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


export const NavMobileWrapper = styled.nav`
    width: 100%;
    min-height: 60px;
    margin: auto;
    background-color: var(--secondary);

    ul{
        height: 100%;
        list-style: none;
        padding: 0;

    }

    .nav-link {
        display: block;
        width: 100%;
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 20px;
        text-decoration: none;
        text-align: center;
        color: var(--text);
    }

    .nav-link:hover{
        background-color: #FFFFFF;
        color: var(--text);
    }

    .active {
        background-color: #FFFFFF;
        color: var(--text);
        
    }
`

