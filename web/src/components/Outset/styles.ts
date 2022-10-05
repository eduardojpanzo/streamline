import styled from "styled-components";

export const Container = styled.div`
    padding:10px 20px;

    h4{
        font-size:1.2rem;
        font-weight: lighter;
        display: flex;
        align-items: center;
        gap:5px;
        margin-top:20px;

        &::after{
            flex:1;
            display: block;
            height: 1px;
            content:"";
            background:#000;
        }
    }
    `

export const ProjectContent = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    padding-top:10px;
`

export const ModalContainer = styled.div`
    h4{
        margin-bottom: 20px;
    }
`