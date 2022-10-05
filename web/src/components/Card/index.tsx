import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdAdd, MdDelete, MdTimeToLeave } from 'react-icons/md';
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import avatar from "../../assets/avatar.png";

import {Project, Task, UserType } from '../../types';
import { 
  ContainerTask, 
  ContainerCardAddNew, 
  ContainerCardProject, 
  Label, 
  UserItem
} from './styles';
import { Button } from '../FormElement/styles';

interface CardTaskProps{
  data:Task;
  index:number;
  list: string;
}

interface CardAddNewProjectProps{
  handleClick:()=>void;
}

interface UserProps{
  data: UserType
  type:string
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
          <img src={user?.avatarImg?user.avatarImg:avatar} alt={``} />
          <button><MdAdd/></button>
        </div>
        <i><MdDelete/></i>
    </ContainerTask>
    </div>
  );
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

export const UserCard = ({data, type}:UserProps)=>{
  return(
  <UserItem>
      <div className={`avatar`}>
          <img src={data.avatarImg} alt={data.name} />
      </div>
      <div className={`name`}>
          <p>{data.name}</p>
      </div>
      <div className="btn">
          <Button>{type}</Button>
      </div>
  </UserItem>
  )
}