import GlobalStyle from './styles/global';
import {Header} from './components/Header'
import { Board } from './components/Board';

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Board/> 
    </>
  )
}

export default App
