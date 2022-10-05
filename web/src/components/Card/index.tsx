import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdAdd } from 'react-icons/md';
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import avatar from "../../assets/avatar.png";

import {Project, Task } from '../../types';
import { 
  ContainerTask, 
  ContainerCardAddNew, 
  ContainerCardProject, 
  Label 
} from './styles';

interface CardTaskProps{
  data:Task;
  index:number;
  list: string;
}

interface CardAddNewProjectProps{
  handleClick:()=>void;
}

export const CardTask= ({data,index,list}:CardTaskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {user} = useAuth()

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'TASK_CARD',
    item:{id:data.id, index, list},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  drag(ref)

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
      <ContainerTask role='Handle' ref={ref}>
        <header>
          <Label color={data.color}/>
          <h3>{data.name}</h3>
        </header>
        <p>{data.description}</p>
        <div>
          <img src={user?.avatar_img?user.avatar_img:avatar} alt={``} />
          <button><MdAdd/></button>
        </div>
    </ContainerTask>
    </div>
  );
}

export const CardProject = ({data}:{data:Project})=>{
  const handleOpenProject = ()=>{

  }

  const HourFormat = new Intl.DateTimeFormat(
    'pt-PT',
    {month:'long',day:'2-digit'}
  ).format(data.created_at);

  return(
    <ContainerCardProject onClick={handleOpenProject} color={data.color}>
      <header>
        {data.name}
      </header>
      <section>
        <p>{data.description}</p>
        <div>
          <span>{HourFormat}</span>
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