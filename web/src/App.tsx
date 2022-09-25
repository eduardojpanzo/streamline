import GlobalStyle from './styles/global';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';
import { QueryContextProvider } from './contexts/QueryContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <QueryContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <Layout/> 
        </BrowserRouter>
      </AuthProvider>
    </QueryContextProvider>
  )
}

export default App
