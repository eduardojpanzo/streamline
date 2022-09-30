import {Routes,Route} from 'react-router-dom'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { Board } from '../components/Board';
import { Header } from '../components/Header';
import { Outset } from '../components/Outset';
import { SideBar } from '../components/SideBar';
import {BoardContextProvider} from '../contexts/BoardContext';
import { Container } from './styles';

export const Layout: React.FC = () => {
  return(
    <Container>
        <SideBar/>
        <section>
            <Header/>
            <Routes>
              <Route path='/' element={<Outset/>}/>
              <Route path='/boardTask/:projectId' element={
                <DndProvider backend={HTML5Backend}>
                  <BoardContextProvider>
                    <Board/>
                  </BoardContextProvider>
                </DndProvider>
              }/>
            </Routes>
        </section>
    </Container>
  );
}