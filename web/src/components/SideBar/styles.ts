import styled from "styled-components";

export const Container = styled.div`
    flex: 0 0 200px;
    padding: 20px 15px 0;
    border-right:1px solid var(--gray-100);

    display: flex;
    flex-direction:column;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font-weight:600;
    margin-bottom:20px;
`

export const MenuVertical = styled.nav`
    ul{
        display: flex;
        flex-direction:column;
        gap:10px;

        a{
            display: block;
            width: 100%;
            padding:2px 10px;
            border-radius:100px;
            text-decoration:none;
            color:var(--gray-800);

            &.active{
                background:var(--transparent);
            }
        }
    }

`;

export const  UserSection = styled.div`
    border-top: 1px solid var(--gray-100);
    padding:10px;

    display: flex;
    align-items: center;
    gap:5px;

    .avatar{
        border-radius:50%;
        border:1px solid var(--gray-100);
        width: 32px;
        height: 32px;

        img{
            width: 100%;
            object-fit:cover;
        }
    }
`