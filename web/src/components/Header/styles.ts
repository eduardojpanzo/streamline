import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    padding: 0 30px;
    background:#7159c1;
    color:#fff;


    display: flex;
    align-items: center;
    justify-content: space-between;

    .rightSide{
        display: flex;
        align-items: center;
        gap:20px;
    }
    .acessButton{
        display: flex;
        gap:10px;
    }
    .timeDate{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p{
            font-size:1.3rem;
        }
    }
`;