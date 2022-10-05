import { Route, Routes} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outset } from "./components/Outset";
import { BoardContextProvider } from "./contexts/BoardContext";
import { Board } from "./components/Board";
import { Home } from "./pages/home";
import { Project } from "./pages/project";

 
export const RoutesComponent = () => {
    return ( 
        <Routes>
              <Route path='/projects' element={<Outset/>}/>
              <Route path='/boardTask/:projectId' element={
                <DndProvider backend={HTML5Backend}>
                  <BoardContextProvider>
                    <Board/>
                  </BoardContextProvider>
                </DndProvider>
              }/>
              <Route path="projects/:projectId" element={<Project/>}/>
              <Route path='*' element={<Home/>}/>
        </Routes>
     );
}