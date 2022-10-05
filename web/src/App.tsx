import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import { QueryContextProvider } from './contexts/QueryContext';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './Layout';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <QueryContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <ToastContainer/>
          <Layout/> 
        </BrowserRouter>
      </AuthProvider>
    </QueryContextProvider>
  )
}

export default App
