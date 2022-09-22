import { useState } from 'react';
import { CadastreForm, SignInForm } from '../FormElement';
import { Container } from './styles';

export function Header() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <Container>
      <h1>Streamline</h1>
      
      <div className='rightSide'>
        <div className='acessButton'>
          <button className={"signIn"} onClick={()=>setOpenSignIn(true)}>
            Logar
          </button>

          <button className={"signUp"} onClick={()=>setOpenSignUp(true)}>
            Cadastro
          </button>
        </div>

        <div className='timeDate'>
          <p>17:30</p>
          <span>18 August</span>
        </div>
      </div>
      <SignInForm open={openSignIn} setOpen={setOpenSignIn}/>
      <CadastreForm open={openSignUp} setOpen={setOpenSignUp}/>
    </Container>
  )
}