import { useState,useEffect, ChangeEvent,FormEvent} from 'react';
import ReactModal from 'react-modal';

import { useAuth } from '../../hooks/useAuth';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';

import { Project } from '../../types';
import { ICreateProjectDTO } from '../../types/dto';

import { CardAddNewProject, CardProject } from '../Card';
import { FormControl } from '../FormElement';

import { Button } from '../FormElement/styles';
import { Container, ModalContainer } from './styles';

export const Outset: React.FC = () => {
  const {user} = useAuth();
  const {handleGetUserProjects, handleCreateProject} = useHandleQuery()

  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [data,setData] = useState<ICreateProjectDTO>({} as ICreateProjectDTO);

  
  useEffect(()=>{
    if (user) {
      handleGetUserProjects(user.id)
      .then(projects=>setProjects(projects))
      .catch(err=>console.log(err))
    }
  },[user])

  const handleRequestCloseModal = ()=>{
    setOpenModal(false)
  }
  

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault();
    
    if (user) {
      await handleCreateProject({...data,authorId:user.id});
      
      alert("Projecto Criado!");
    }
  }

  return(
    <Container>
        <CardAddNewProject handleClick={()=>setOpenModal(true)}/>
        {projects.length>0 && (projects.map(project=>
            <CardProject key={project.id} data={project}/>
        ))}
        
        <ReactModal
         isOpen={openModal}
         onRequestClose={handleRequestCloseModal}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >
          <ModalContainer>
            <h4>Criar Novo Projecto</h4>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={user?.id} onChange={handleChange}/>

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