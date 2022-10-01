import { useState,useEffect, ChangeEvent,FormEvent} from 'react';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';

import { Project } from '../../types';
import { ICreateProjectDTO } from '../../types/dto';

import { CardAddNewProject, CardProject } from '../Card';
import { FormControl, SelectColor } from '../FormElement';

import { Button } from '../FormElement/styles';
import { Container, ModalContainer } from './styles';

export const Outset: React.FC = () => {
  const {user} = useAuth();
  const navigate = useNavigate()
  const {handleGetUserProjects, handleCreateProject} = useHandleQuery()

  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [data,setData] = useState<ICreateProjectDTO>({} as ICreateProjectDTO);

  
  useEffect(()=>{
    if (!user) {
      navigate("/")
    }

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

  const handleChangeColor = (e:ChangeEvent<HTMLSelectElement>)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleCreate = async (e:FormEvent)=>{
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
        appElement={document.getElementById('root') as HTMLElement}
         isOpen={openModal}
         onRequestClose={handleRequestCloseModal}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >
          <ModalContainer>
            <h4>Criar Novo Projecto</h4>
            <form onSubmit={handleCreate}>
              <input type="hidden" name="id" value={user?.id} onChange={handleChange}/>

              <FormControl handleChange={handleChange} name={'name'} type={'text'}>
                Nome:
              </FormControl>

              <FormControl handleChange={handleChange} name={'description'} type={'text'}>
                Descrição:
              </FormControl>

              <SelectColor handleChangeColor={handleChangeColor}/>

              <Button type='submit'>
                Criar
              </Button>
            </form>
          </ModalContainer>
        </ReactModal>
    </Container>
  );
}