import GlobalStyle from './styles/global';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Layout/> 
    </BrowserRouter>
  )
}

export default App
