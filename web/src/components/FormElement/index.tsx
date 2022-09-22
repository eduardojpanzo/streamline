import { ChangeEvent, FormEvent, useState } from 'react';
import ReactModal from 'react-modal'
import { SignInContainer, SignUpContainer } from './styles'

interface SignFormProps{
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
interface UserAccessInfo{
    email:string;
    password:string;
    confirmPassword?:string;
}

export const SignInForm = ({open,setOpen}:SignFormProps)=>{
    const [userInfo,setUserInfo] = useState<UserAccessInfo>({} as UserAccessInfo);

    const handleRequestCloseModal = ()=>{
        setOpen(false)
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        console.log(userInfo);
        
        console.log("Fazendo o login...");

        handleRequestCloseModal()
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
    const [userInfo,setUserInfo] = useState<UserAccessInfo>({} as UserAccessInfo);
    
    const handleRequestCloseModal=()=>{
        setOpen(false)
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        console.log(userInfo);

        if (!(userInfo.password === userInfo.confirmPassword)) {
            alert("As palavras passes não são iguais..");
            return
        }

        console.log("Fazendo o cadastro...");

        handleRequestCloseModal()
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