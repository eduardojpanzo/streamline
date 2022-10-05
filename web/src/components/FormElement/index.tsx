import { ChangeEvent, FormEvent, useState,ReactNode } from 'react';
import ReactModal from 'react-modal'
import { useAuth } from '../../hooks/useAuth';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';
import {UserAuthDTO, UserCreateDTO } from '../../types/dto';
import {FormControlStyled, SelectorColorStyled, SignInContainer, SignUpContainer } from './styles'

interface SignFormProps{
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormControlProps{
    children:ReactNode,
    name:string,
    type:string,
    value?:string,
    handleChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

interface SelectColorProps{
    handleChangeColor:(event:ChangeEvent<HTMLSelectElement>)=>void
}

export const SignInForm = ({open,setOpen}:SignFormProps)=>{
    const [userInfo,setUserInfo] = useState<UserAuthDTO>({} as UserAuthDTO);
    const {signIn} = useAuth();

    const handleRequestCloseModal = ()=>{
        setOpen(false)
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }

    const handleLogIn = async (e:FormEvent)=>{
        e.preventDefault();
        
        try {
            await signIn(userInfo);
            handleRequestCloseModal()
        } catch (error) {
            alert(error)
        }

    }

    return(
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={open}
            onRequestClose={handleRequestCloseModal}
            style={
                {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
            }
        >
            <SignInContainer onSubmit={handleLogIn}>
                <h3>Faça o login </h3>
                <FormControl
                    name='email'
                    type='email'
                    handleChange={handleChange}
                >Email</FormControl>

                <FormControl
                    name='password'
                    type='password'
                    handleChange={handleChange}
                >Senha</FormControl>

                <button type='submit'>Log in</button>
            </SignInContainer>
        </ReactModal>
    )
}


export const CadastreForm = ({open,setOpen}:SignFormProps)=>{
    const {handleCreateAccount} = useHandleQuery();
    const [userInfo,setUserInfo] = useState<UserCreateDTO>({} as UserCreateDTO);
    
    const handleRequestCloseModal=()=>{
        setOpen(false)
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();

        if (!(userInfo.password === userInfo.confirmPassword)) {
            alert("As palavras passes não são iguais..");
            return
        }

        try {
            await handleCreateAccount(userInfo);
            alert("User Created");

            handleRequestCloseModal();
        } catch (err) {
            alert(err)
        }

    }

    return(
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={open}
            onRequestClose={handleRequestCloseModal}
            style={
                {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
            }
        >
            <SignUpContainer onSubmit={handleSubmit}>
                <h3>Cadastre-se com</h3>

                <div className="ghost">
                    <button className="btn_ghost">
                        Google
                    </button>
                    <button className="btn_ghost">
                        Facebook
                    </button>
                </div>

                <span className="or">ou</span>

                <FormControl
                    name='name'
                    type='text'
                    handleChange={handleChange}
                >Seu Nome</FormControl>

                <FormControl
                    name='email'
                    type='email'
                    handleChange={handleChange}
                >Email</FormControl>


                <FormControl
                    name='password'
                    type='password'
                    handleChange={handleChange}
                >Senha</FormControl>

                <FormControl
                    name='confirmPassword'
                    type='password'
                    handleChange={handleChange}
                >Confirmar senha</FormControl>

                <button type='submit'>Cadastrar</button>
            </SignUpContainer>
        </ReactModal>
    )
}

export const FormControl = ({children,name,type,handleChange,value}:FormControlProps)=>{ 
    return(
        <FormControlStyled>
            <input type={type} name={name} onChange={handleChange} value={value}/>
            <span>{children}</span>
        </FormControlStyled>
    )
}

export const SelectColor = ({handleChangeColor}:SelectColorProps)=>{
    return(
    <SelectorColorStyled htmlFor="color">
        <span>Escolha uma Cor</span>
        <select name="color" id="color" onChange={handleChangeColor}>
            <option disabled>Escolha uma cor</option>
            <option value="#1237bc">Violeta</option>
            <option value="#10ad32">Verde</option>
            <option value="#b12020">Vermelho</option>
            <option value="#787878">Cinza</option>
        </select>
    </SelectorColorStyled>
    )
}