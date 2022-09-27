import { ChangeEvent, FormEvent, useState } from 'react';
import {MdAdd} from 'react-icons/md'
import ReactModal from 'react-modal';
import { Task } from '../../types';
import { ICreateTaskDTO } from '../../types/dto';
import { CardTask } from '../Card';
import { FormControl } from '../FormElement';
import { Button } from '../FormElement/styles';

import { Container, ModalContainer } from './styles';
interface ListProps{
  done?:boolean,
  creatable?:boolean,
  title:string,
  tasks:Task[]
}

export const List = ({tasks,done,creatable,title}:ListProps) => {
  const [openModal,setOpenModal] = useState(false)
  const [data,setData] = useState<ICreateTaskDTO>({} as ICreateTaskDTO);

  const handleRequestCloseModal = ()=>{
    setOpenModal(false)
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setData({...data,[e.target.name]:e.target.value})
  }

  const handleCreatNewTask = async (e:FormEvent)=>{
    e.preventDefault();
    
    console.log(data);
    
    // if (user) {
    //   await createProject({...data,authorId:user.id});
      
    //   alert("Projecto Criado!");
    // }
  }

  return(
    <Container done={done}>
      <header>
        <h2>{title}</h2>
        {creatable &&(
          <button type='button' onClick={()=>setOpenModal(true)}>
            <MdAdd size={24} color='#fff'/>
          </button>
        )}
      </header>
      <ul>
        {tasks.map(task=><CardTask key={task.id} data={task}/>)}
      </ul>

      <ReactModal
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

            <FormControl handleChange={handleChange} name={'description'} type={'text'}>
              Descrição:
            </FormControl>

            <Button type='submit'>
              Criar
            </Button>
          </form>
        </ModalContainer>
      </ReactModal>
    </Container>
  );
}