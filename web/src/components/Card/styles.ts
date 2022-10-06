import styled from "styled-components";

export const ContainerTask = styled.div`
    position:relative;
    background:#fff;
    border-radius:5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
    border-top:20px solid rgba(230,236,245,0.4);
    cursor: grab;

    i{
        font-size:1.15rem;
        position:absolute;
        top: -20px;
        right:5px;
        cursor: pointer;
        
        &:hover{
            color: var(--red-500);
        }
    }
    

    header{
        position:absolute;
        top: -32px;
        left:10px;

        h3{
            font-size:0.82rem;
            margin-left:10px;
        }
    }

    p{
        font-weight:500;
        line-height:20px;
    }

    div{
        display: flex;
        align-items: center;
        gap:5px;

        img{
            width: 24px;
            height: 24px;
            border-radius:2px;
            margin-top: 5px;
        }

        button{
            width: 24px;
            height: 24px;
            border-radius:2px;
            margin-top: 5px;
        }
    }
`;

export const NewTaskHolder = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;

    label{
        margin: 0;
        padding: 0;
    }
`

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius:2px;
    display:inline-block;
    background: ${props=>props.color};
    
`;

export const ContainerCardProject = styled.div`
    width: 230px;
    height: 180px;
    overflow:hidden;
    border-radius:8px;
    border:1px solid #fff5;
    box-shadow:0 1px 4px 0 rgba(192,208,230,0.8);
    cursor: pointer;

    display: flex;
    flex-direction: column;

    header{
        height: 70px;
        padding: 5px;
        background: var(--gray-700);
        background: ${props=>props.color?props.color:"#323238"};
        text-align:center;
        font-size:1.2rem;
        font-weight:bolder;
        text-shadow:.5px .2px #111;
        color:#fff;
    }

    section{
        flex:1;
        padding: 8px 5px;
        background: var(--gray-100);

        display: flex;
        flex-direction:column;
        justify-content: space-between;

        span{
            display: block;
            color: var(--gray-500);
            margin-bottom: 3px;
        }

        .links{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        a{
            display: inline-block;
            padding: 0.3rem;
            outline: none;
            transition: filter 0.2s;
            cursor: pointer;
            border-radius:4px;
            background: var(--gray-300);

            &:hover{
                filter: brightness(0.82);
            }
        }
    }
`

export const ContainerCardAddNew = styled.div`
    position: relative;
    width: 230px;
    height: 60px;
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

export const UserItem = styled.div`
    position: relative;
    padding: .7rem;
    border-radius: 8px;
    border:1px solid #0001;

    display: flex;
    align-items: center;
    gap: 15px;

    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid var(--gray-100);
        overflow: hidden;

        img{
            object-fit: cover;
        }
    }
    .name{
        p{
            font-size: 1.2rem;
            font-weight: 800;
        }
        span{
            font-style: italic;
        }
    }
    .btn{
        flex:1;
        display: flex;
        justify-content: flex-end;
    }

`