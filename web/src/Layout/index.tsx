import {Routes,Route} from 'react-router-dom'

import { Board } from '../components/Board';
import { Header } from '../components/Header';
import { Outset } from '../components/Outset';
import { SideBar } from '../components/SideBar';
import { Container } from './styles';

export const Layout: React.FC = () => {
  return(
    <Container>
        <SideBar/>
        <section>
            <Header/>
            <Routes>
              <Route path='/' element={<Outset/>}/>
              <Route path='/boardTask' element={<Board/>}/>
            </Routes>
        </section>
    </Container>
  );
}