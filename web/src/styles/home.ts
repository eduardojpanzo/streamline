import styled from "styled-components";

export const Container = styled.div`
  background:#ecf1f0;
  height: calc(100% - 80px);

  padding:20px;
`;

export const  UserInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:100px;
    margin-bottom: 20px;

    figure{
        width: 250px;
        height: 250px;
        border-radius:50%;
        border:1px solid #ddd;
        overflow:hidden;

        img{
            width: 100%;
            object-fit:cover;
        }
    }
    p{
        font-size:1.4rem;
        line-height:1.9;
    }
`

export const UserNumber = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;

    font-size:1.6rem;
    text-align:center;
    color: var(--violet-500);
`

export const Apresetetion = styled.div`
    width: 480px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    h1{
        font-size:3rem;
        color: var(--gray-700);
        margin-bottom: 20px;
    }

    p{
        font-size:1.2rem;
        font-weight: 200;
        line-height:1.5;
    }
`