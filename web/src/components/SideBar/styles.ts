import styled from "styled-components";

export const Container = styled.div`
    flex: 0 0 100px;
    padding: 20px 15px 0;
    border-right:1px solid var(--gray-100);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    width: 70px;
    height: 70px;
    margin-bottom:20px;
    border:1px solid var(--gray-100);
    background: var(--gray-100);
    border-radius:50%;
    text-align: center;
    line-height:70px;

    font-size:1.8rem;
    font-weight:900;

    &:hover{
        filter: brightness(0.8);
        cursor: pointer;
    }
`

export const MenuVertical = styled.nav`
    ul{
        display: flex;
        flex-direction:column;
        gap:10px;

        a{
            display: flex;
            align-items: center;
            gap:10px;
            width: 100%;
            padding:5px 10px;
            border-radius:100px;
            font-size:1rem;
            text-decoration:none;
            color:var(--gray-800);
            transition: all ease .2s;

            &:hover{
                background:var(--transparent);
            }
        }
    }

`;

export const  UserSection = styled.div`
    position: relative;
    border-top: 1px solid var(--gray-100);
    padding:10px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap:5px;

    .avatar{
        border-radius:50%;
        border:1px solid var(--gray-100);
        width: 32px;
        height: 32px;
        cursor: pointer;

        img{
            width: 100%;
            object-fit:cover;
        }

        ul{
            position: absolute;
            top: -40px;
            left: -10px;
            padding: 0 0.32rem;
            border: 1px solid var(--gray-700);
            background: var(--white);
            border-radius: 5px;
            color: var(--gray-700);

            display: none;
            flex-direction: column;
            gap: 5px;

            li{
                padding: 0.5rem 0.62rem;
                cursor: pointer;
                
                &:not(:first-child){
                    border-top: 1px solid var(--gray-700);
                }
            }

            &.flex{
                display:flex;
            }
        }
    }
`