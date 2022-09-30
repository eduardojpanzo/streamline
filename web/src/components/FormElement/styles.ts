import styled from "styled-components"

export const SignInContainer = styled.form`
    display: block;
    width: 300px;
    background: #fff;

    h3{
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    button{
        display: block;
        padding: 10px 20px;
        border-radius: 5px;
        background: var(--violet-500);
        color: #fff;
        font-weight: 600;
        transition-duration: 0.3s;
    }

    .formControl{
        display: block;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        position: relative;
        background-color: #ccc;

        input{
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px;
            border: none;
            border: 1px solid #e0e0e0;
            transition-duration: 0.3s;

            &:focus{
                outline: none;
                transition-duration: 0.3s;
                border-bottom: 2px solid var(--gray-700);
            }

        }

        span{
            display: block;
            padding: 0px 5px; 
            margin: 5px 0px 0px 5px; 
            background: #fff;
            position: absolute;
            top: -15px;
            font-size: 0.89rem;  
            color: var(--gray-700);
            transition-duration: 0.3s;
        }
    }
`

export const SignUpContainer = styled.form`
    display: block;
    width: 320px;
    padding: 20px;
    background: #fff;

    h3{
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    button{
        display: block;
        padding: 10px 20px;
        border-radius: 5px;
        background: var(--violet-500);
        color: #fff;
        font-weight: 600;
        transition-duration: 0.3s;
    }

    .ghost{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-evenly;
        
        .btn_ghost{
            background-color: transparent;
            border:1px solid #ecf2ff;
            color: #141c2c;
            display: flex;
            align-items: center;
            font-size: 14px;
            
            img,
            svg{
                margin-right: 5px;
                width: 20px;
                font-size: 18px;
                color:#149ddd;
            }
        }
    }

    .or{
        display: block;
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2px;

        &::before{
            content: '';
            flex: 1;
            height: 1px;
            background: var(--gray-400);
        }
        &::after{
            content: '';
            flex: 1;
            height: 1px;
            background: var(--gray-400);
        }
    }
    
    .formControl{
        display: block;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        position: relative;
        background-color: #ccc;

        input{
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px;
            border: none;
            border: 1px solid #e0e0e0;
            transition-duration: 0.3s;

            &:focus{
                outline: none;
                transition-duration: 0.3s;
                border-bottom: 2px solid var(--gray-700);
            }

        }

        span{
            display: block;
            padding: 0px 5px; 
            margin: 5px 0px 0px 5px; 
            background: #fff;
            position: absolute;
            top: -15px;
            font-size: 0.89rem;  
            color: var(--gray-700);
            transition-duration: 0.3s;
        }
    }
`

export const FormControlStyled = styled.label`
        display: block;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        position: relative;
        background-color: #ccc;

        input{
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px;
            border: none;
            border: 1px solid #e0e0e0;
            transition-duration: 0.3s;

            &:focus{
                outline: none;
                transition-duration: 0.3s;
                border-bottom: 2px solid var(--gray-700);
            }

        }

        span{
            display: block;
            padding: 0px 5px; 
            margin: 5px 0px 0px 5px; 
            background: #fff;
            position: absolute;
            top: -15px;
            font-size: 0.89rem;  
            color: var(--gray-700);
            transition-duration: 0.3s;
    }
`

export const Button = styled.button`
    display: block;
    padding: 10px 20px;
    border-radius: 5px;
    background: var(--violet-500);
    color: #fff;
    font-weight: 600;
    transition-duration: 0.3s;
`