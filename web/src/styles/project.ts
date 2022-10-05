import styled from "styled-components";

export const Container = styled.div`
    header{
        padding: 10px;
        h3{
            text-align:center;
            font-size:1.6rem;
            font-weight:700;
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

export const NewUser = styled.form`
    max-width: 425px;
    width: 90%;
    margin: 2rem auto 0;
    
    display: flex;
    flex-direction: column;
    gap: 5px;

    &>p{
        font-weight:600;
        font-size:1.5rem;
    }
    
    fieldset{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        font-size:1.2rem;
        padding: 10px;
        border: none;
        margin: 10px 0;

        label{
            font-weight:500;
            display: flex;
            align-items: center;
            gap:2px;
        }
    }

`

export const DeleteProject = styled.form`
    max-width: 425px;
    width: 90%;
    margin: 4rem auto 0.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px;
    border:1px solid var(--red-500);
    border-radius:4px;
    color: var(--red-500);

    button{
        border:1px solid var(--red-500);
        background: transparent;
        color: var(--red-500);
    }
`