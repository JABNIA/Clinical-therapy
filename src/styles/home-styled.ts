import styled from "styled-components";

export const HomeWrapper = styled.section`
    width: 60%;
    margin: auto;
    padding: 30px 32px;
    background-color: var(--background);
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

    .chairBg {
        height: 480px;
        background-image: url('/images/chair.jpeg');
    }

    .contentWrapper{
        width: 70%;
        float: right;
        padding: 20px 20px 20px 270px;
        height: 100%;
        background: linear-gradient(to right, transparent 1%, var(--background) 30%);
    }

    .info{
        margin-top: 40px;
        border-top: 2px solid var(--primary);
        padding: 32px;
    }

    .therapy{
        
        display: flex;
        gap: 30px;
    }

    .small-list{
        list-style-type: disc;
        margin: 20px 30px ;
        color: var(--text2);
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }

    .sessionImg{
        display: block;
        width: 500px;
        float: right;
        border-radius: 15px;
    }

    .benefits{
        margin-top: 40px;
        padding: 32px;
        border-top: 2px solid var(--primary);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .services{
       
    }
`