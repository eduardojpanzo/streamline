import styled from "styled-components";

export const Container = styled.div`
    header{
        padding: 10px;
        h3{
            text-align:center;
            font-size:1.6rem;
            font-weight:500;
            margin-bottom: 15px;;
        }
        p{
            font-size:1.1rem;
            line-height:1.5;
            margin-bottom: 10px;
            text-align: center;
        }
    }

    fieldset{
        border: none;
        max-width: 425px;
        width: 90%;
        margin: 2rem auto 0;

        p{
            text-shadow:0 0 1px #0006;
            font-size:1.2rem;
            margin-bottom: 10px;
        }
    }
`

export const UsersField = styled.div`
    max-width: 425px;
    width: 90%;
    margin: 2rem auto 0;
    
    display: flex;
    flex-direction: column;
    gap: 5px;
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
