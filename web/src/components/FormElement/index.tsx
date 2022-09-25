import { ChangeEvent, FormEvent, useState,ReactNode } from 'react';
import ReactModal from 'react-modal'
import { useAuth } from '../../hooks/useAuth';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';
import {UserAuthDTO, UserCreateDTO } from '../../types/dto';
import {FormControlStyled, SignInContainer, SignUpContainer } from './styles'

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

export const SignInForm = ({open,setOpen}:SignFormProps)=>{
    const [userInfo,setUserInfo] = useState<UserAuthDTO>({} as UserAuthDTO);
    const {autheticate} = useHandleQuery();
    const {keepingToken} = useAuth();

    const handleRequestCloseModal = ()=>{
        setOpen(false)
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        
        try {
            const {token, user} = await autheticate(userInfo);

            keepingToken({token,user})
            
            handleRequestCloseModal()
        } catch (error) {
            alert(error)
        }

    }

    return(
        <ReactModal
            isOpen={open}
            onRequestClose={handleRequestCloseModal}
            style={
                {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
            }
        >
            <SignInContainer onSubmit={handleSubmit}>
                <h3>Faça o login </h3>
                <label className="formControl">
                    <input type='email' name="email" onChange={handleChange}/>
                    <span>Email</span>
                </label>

                <label className="formControl">
                    <input type='password' name="password" onChange={handleChange}/>
                    <span>Senha</span>
                </label>

                <button type='submit'>Log in</button>
            </SignInContainer>
        </ReactModal>
    )
}


export const CadastreForm = ({open,setOpen}:SignFormProps)=>{
    const {createAccount} = useHandleQuery();
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
            await createAccount(userInfo);
            alert("User Created");

            handleRequestCloseModal();
        } catch (err) {
            alert(err)
        }

    }

    return(
        <ReactModal
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
                        {/* <img src="./google.png"/> */}
                        Google
                    </button>
                    <button className="btn_ghost">
                        {/* <FaFacebook/> */}
                        Facebook
                    </button>
                </div>

                <span className="or">ou</span>

                <label className="formControl">
                    <input type='text' name="name" onChange={handleChange}/>
                    <span>Seu Nome</span>
                </label>

                <label className="formControl">
                    <input type='email' name="email" onChange={handleChange}/>
                    <span>Email</span>
                </label>

                <label className="formControl">
                    <input type='password' name="password" onChange={handleChange}/>
                    <span>Senha</span>
                </label>

                <label className="formControl">
                    <input type='password' name="confirmPassword" onChange={handleChange}/>
                    <span>Confirmar senha</span>
                </label>

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