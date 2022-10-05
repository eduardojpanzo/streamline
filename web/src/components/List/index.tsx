import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDrop } from 'react-dnd';
import {MdAdd} from 'react-icons/md'
import ReactModal from 'react-modal';
import { useAuth } from '../../hooks/useAuth';
import { useBoard } from '../../hooks/useBoard';
import { DragItemtype, Task } from '../../types';
import { ICreateTaskDTO } from '../../types/dto';
import { CardTask } from '../Card';
import { FormControl } from '../FormElement';
import { Button } from '../FormElement/styles';

import { Container, ModalContainer } from './styles';
import { useHandleQuery } from "../../hooks/useHandleQueryUser";
interface ListProps{
  done?:boolean,
  creatable?:boolean,
  title:string,
  tasks:Task[],
  list:string
}

export const List = ({tasks,done,creatable,title, list}:ListProps) => {
  const [openModal,setOpenModal] = useState(false)
  const [data,setData] = useState<ICreateTaskDTO>({} as ICreateTaskDTO);
  const {changeTaskStatus, projectId} = useBoard();
  const {user} = useAuth();
  const {handleCreateTask} = useHandleQuery()

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setData({...data,[e.target.name]:e.target.value})
      
  }

  const handleChangeColor = (e:ChangeEvent<HTMLSelectElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleCreatNewTask = async (e:FormEvent)=>{
    e.preventDefault();

    if (user && projectId) {
      await handleCreateTask({...data,userId:user.id,projectId});
      
      alert("Tarefa Criado!");
      setOpenModal(false);
    }
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK_CARD',
    hover(item:DragItemtype, monitor) {
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    drop(item, monitor) {
      const taskId = item.id;
      const draggedList = item.list
      const targetList = list;
      
      if (targetList === draggedList) {
        return
      }

      if (user) {
        (async ()=>{
          const task = await changeTaskStatus({
            nextStatus: targetList,
            taskId,
            userId: user.id
          })
  
          alert("Feito")
        })()
      }
    },
  }))

  return(
    <Container done={done} ref={drop} style={{backgroundColor:isOver?'#111a':''}}>
      <header>
        <h2>{title}</h2>
        {creatable &&(
          <button type='button' onClick={()=>setOpenModal(true)}>
            <MdAdd size={24} color='#fff'/>
          </button>
        )}
      </header>
      <ul>
        {tasks.map((task,index)=>
          <CardTask list={list} index={index} key={task.id} data={task}/>
        )}
      </ul>

      <ReactModal
          appElement={document.getElementById('root') as HTMLElement}
         isOpen={openModal}
         onRequestClose={()=>setOpenModal(false)}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >
        <ModalContainer>
          <h4>Criar Nova Tarefa</h4>
          <form onSubmit={handleCreatNewTask}>

            <FormControl handleChange={handleChange} name={'name'} type={'text'}>
              Nome:
            </FormControl>

            <fieldset>
              <label htmlFor="todo">
                Tarefas
                <input
                  type="radio"
                  name="status"
                  id="todo"
                  value='todo'
                  onChange={handleChange}
                />
              </label><br/>
              <label htmlFor="process">
                Fazendo
                <input
                  type="radio"
                  name="status"
                  id="process"
                  value='process'
                  onChange={handleChange}
                />
              </label><br/>
              <label htmlFor="stoped">
                Em Pausa
                <input
                  type="radio"
                  name="status"
                  id="stoped"
                  value='stoped'
                  onChange={handleChange}
                />
              </label><br/>
            </fieldset>

            <FormControl handleChange={handleChange} name={'description'} type={'text'}>
              Descrição:
            </FormControl>

            <select name="color" id="color" onChange={handleChangeColor}>
              <option disabled>Escolha uma cor</option>
              <option value="#1237bc">Violeta</option>
              <option value="#10ad32">Verde</option>
              <option value="#b12020">Vermelho</option>
              <option value="#787878">Cinza</option>
            </select>

            <Button type='submit'>
              Criar
            </Button>
          </form>
        </ModalContainer>
      </ReactModal>
    </Container>
  );
}