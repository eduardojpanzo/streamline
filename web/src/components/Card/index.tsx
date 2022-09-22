import {Link} from 'react-router-dom'
import { CardType } from '../../types';
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

export const CardProject = ()=>{
  return(
    <ContainerCardProject>
      <div className="preview">
        <img src="" alt="projectPreview" />
      </div>
      <div className="details">
        <h3 className="tittle">Scrumbs new feature set</h3>
        <span>Mar 22, 2019</span>
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