import { ChangeEvent, FormEvent, useState } from 'react';
import { useDrag} from 'react-dnd';
import { MdAdd, MdDelete} from 'react-icons/md';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import avatar from "../../assets/avatar.png";

import {Task, UserType} from '../../types';
import { 
  ContainerTask, 
  Label,
  NewTaskHolder, 
} from './styles';
import { Button } from '../FormElement/styles';
import { api } from '../../services/api';
import { useBoard } from '../../hooks/useBoard';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { FormControl } from '../FormElement';
import { useQuery } from 'react-query';

interface CardTaskProps{
  task:Task;
  index:number;
  list: string;
}

export const CardTask= ({task,index,list}:CardTaskProps) => {
  const navigate = useNavigate();
  const {user} = useAuth()
  const {projectId} = useBoard();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [holders, setHolders] = useState<UserType[]>([]);

  const {data, isFetching} = useQuery('holderTasks',async()=>{
    const res  = await api.get(`/userstasks/holders/${task.id}`);
    const holders = res.data

    setHolders(holders);

    return holders;
  })

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'TASK_CARD',
    item:{id:task.id, index, list},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const reloadPage = ()=>{
    setInterval(()=>{
      window.location.reload()
    },5000)
  }

  const handleDeleteTask = async ()=>{

    if (user) {

      try {
          const res = await api.delete(`/tasks/delete`,{
              data:{
                  userId: user.id,
                  projectId,
                  taskId: task.id
              }
          });

          toast.success('Tarefa Eliminado !');
          
          reloadPage();

      } catch (err) {
          toast.success(`${err}`, {
              position: toast.POSITION.TOP_RIGHT,
              delay:50,

          });
      }
  }
  }

  const handleGetEmailUser = (e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
  }

  const handleAddTaskHolder = async(e:FormEvent)=>{
    e.preventDefault();

    if (user) {
        try {
            await api.post(`/userstasks/holder`,{
                email,
                taskId: task.id,
                userId: user.id
            });

            toast.success('Colaborador Adicionado !');
            reloadPage();
        } catch (err) {
            toast.error(`${err}`);
        }
    }
    
  }

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
      <ContainerTask role='Handle' ref={drag}>
        <header>
          <Label color={task.color}/>
          <h3>{task.name}</h3>
        </header>

        <p>{task.description}</p>

        <div>
          {holders && holders.map(holder=>
            <img key={holder.id} src={holder.avatarImg?holder.avatarImg:avatar} alt={holder.name} />
          )}
          <button onClick={()=>setOpenModal(true)}><MdAdd/></button>
        </div>

        <i onClick={handleDeleteTask}><MdDelete/></i>

    </ContainerTask>

    <ReactModal
          appElement={document.getElementById('root') as HTMLElement}
         isOpen={openModal}
         onRequestClose={()=>setOpenModal(false)}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >
        <NewTaskHolder onSubmit={handleAddTaskHolder}>
            <FormControl
                name='email'
                type='email'
                handleChange={handleGetEmailUser}
            >Email:</FormControl>

            <Button type='submit'>Adicionar</Button>
        </NewTaskHolder>
    </ReactModal>

    </div>
  );
}