import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    background:#fff;
    border-radius:5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
    border-top:20px solid rgba(230,236,245,0.4);
    cursor: grab;

    header{
        position:absolute;
        top: -22px;
        left:15px;
    }

    p{
        font-weight:500;
        line-height:20px;
    }
    
    img{
        width: 24px;
        height: 24px;
        border-radius:2px;
        margin-top: 5px;
    }
`;

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius:2px;
    display:inline-block;
    background: ${props=>props.color};
    
`;

export const ContainerCardProject = styled.div`
    width: 230px;
    height: 240px;
    overflow:hidden;
    border-radius:8px;
    border:1px solid #fff5;
    box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    .preview{
        flex:2.5;
        background: rgba(0,0,0,0.3);
    }    
    .details{
        flex:1;
        padding: 5px;
        background: var(--white);

        span{
            color: var(--gray-700);
        }
    }
`

export const ContainerCardAddNew = styled.div`
    position: relative;
    width: 230px;
    height: 240px;
    background: var(--gray-100);
    border-radius:8px;
    border:1px solid var(--violet-500);
    overflow: hidden;
    color: var(--violet-500);
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 5px;
   
    &:hover{
        filter:brightness(0.8);
    }
` 