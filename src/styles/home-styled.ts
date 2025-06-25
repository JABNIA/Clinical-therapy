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
        min-width: 300px;
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }

    .chairBg {
        height: 480px;
        background-image: url('/assets/images/chair.jpeg');
    }

    .contentWrapper{
        width: 70%;
        float: right;
        padding: 20px 10px 20px 15%;
        height: 100%;
        background: linear-gradient(to right, transparent 1%, var(--background) 30%);
    }

    .info{
        margin-top: 40px;
        border-top: 2px solid var(--primary);
        padding: 32px;
    }

    .therapy{
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 20px;
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

    .img-container{
        align-items: center;
        display: flex;
        height: auto;
    }

    .sessionImg{
        width: 100%;
        border-radius: 15px;
        flex-shrink: 0;
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

export const HomeWrapperTablet = styled.section`
    width: 100%;
    margin: auto;
    padding: 30px 32px;
    background-color: var(--background);
    color: var(--text2);

    .headline{
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 500;
        font-size: 1.3rem;
    }
    .content{
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }

    .chairBg {
        height: 480px;
        background-image: url('/assets/images/chair.jpeg');
    }

    .contentWrapper{
        width: 70%;
        float: right;
        padding: 20px 20px 20px 30%;
        height: 100%;
        background: linear-gradient(to right, transparent 1%, var(--background) 30%);
    }

    .info{
        margin-top: 40px;
    }

    .therapy{
        display: flex;
        gap: 10px;
    }

    .small-list{
        padding: 0 10px;
        list-style: none;
    }

    .sessionImg{
       max-height: 250px;
       border-radius: 8px;
    }

    .benefits{
    }
    
    .services{
        border-top: 2px solid var(--primary);
       
    }
`

export const HomeMobileWrapper = styled.section`
    width: 100%;
    margin: auto;
    padding: 30px 32px;
    background-color: var(--background);
    color: var(--text2);

    .headline{
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: Numans, 'Open Sans', sans-serif;
        font-weight: 500;
        font-size: 1.3rem;
        text-align: center;
    }
    .content{
        width: 90%;
        padding: 10px 0 0 40px;
        font-family: Lexend, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }

    .chairBg {
        width: 90%;
        height: 350px;
        margin: auto;
        border-radius: 15px;
        background-image: url('/assets/images/chair.jpeg');
        background-position: 20% center;

    }

    .contentWrapper{
        width: 100%;
        height: 100%;
    }

    .info{
        margin-top: 40px;
    }

    .therapy{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .small-list{
        padding: 0 10px;
        list-style: none;
    }

    .sessionImg{
        width: 90%;
        max-height: 250px;
        margin: auto;
        border-radius: 8px;
    }

    .benefits{
    }
    
    .services{
        border-top: 2px solid var(--primary);
       
    }
`