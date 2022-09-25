import {Link, useNavigate} from 'react-router-dom'
import { CardType, Project } from '../../types';
import { 
  Container, 
  ContainerCardAddNew, 
  ContainerCardProject, 
  Label 
} from './styles';

interface CardProps{
  data:CardType;
}

export const Card= ({data}:CardProps) => {
  return (
    <Container>
      <header>
        <Label color={data.labels[0]}/>
      </header>
      <p>{data.content}</p>
      <img src={data.user} alt={``} />
    </Container>
  );
}

export const CardProject = ({data}:{data:Project})=>{
  const navigate = useNavigate();
  
  const handleGotoTasks = ()=>{
    navigate("/boardTask")
  }

  return(
    <ContainerCardProject onClick={handleGotoTasks}>
      <div className="preview">
        <img src="" alt="projectPreview" />
      </div>
      <div className="details">
        <h3 className="tittle">{data.name}</h3>
        <span>{`${data?.created_at}`}</span>
      </div>
    </ContainerCardProject>
  )
}


interface CardAddNewProjectProps{
  handleClick:()=>void;
}

export function CardAddNewProject({handleClick}:CardAddNewProjectProps){
  return(
      <ContainerCardAddNew className={`addNew`} onClick={handleClick}>
        Adicionar Novo Projecto
      </ContainerCardAddNew>
  )
}