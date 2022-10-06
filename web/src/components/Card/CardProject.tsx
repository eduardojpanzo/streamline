import { Link } from "react-router-dom";
import { Project } from "../../types";
import { ContainerCardAddNew, ContainerCardProject } from "./styles";

interface CardAddNewProjectProps{
    handleClick:()=>void;
}

  
export const CardProject = ({data}:{data:Project})=>{

    const HourFormat = new Intl.DateTimeFormat(
      'pt-PT',
      {month:'long',day:'2-digit'}
    ).format(Date.now());
  
    return(
      <ContainerCardProject color={data.color}>
        <header>
          {data.name}
        </header>
        <section>
          <p>{data.description}</p>
          <div>
            <span>{`${data.createdAt}`}</span>
            <div className='links'>
              <Link to={`/boardTask/${data.id}`}>Go to Tasks</Link>
              <Link to={`/projects/${data.id}`}>View Project</Link>
            </div>
          </div>
        </section>
      </ContainerCardProject>
    )
}

export function CardAddNewProject({handleClick}:CardAddNewProjectProps){
    return(
        <ContainerCardAddNew className={`addNew`} onClick={handleClick}>
          Adicionar Novo Projecto
        </ContainerCardAddNew>
    )
  }