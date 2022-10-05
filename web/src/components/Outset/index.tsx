import { useState,useEffect, ChangeEvent,FormEvent} from 'react';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';

import { Projects } from '../../types';
import { ICreateProjectDTO } from '../../types/dto';

import { CardAddNewProject, CardProject } from '../Card';
import { FormControl, SelectColor } from '../FormElement';

import { Button } from '../FormElement/styles';
import { Container, ModalContainer, ProjectContent } from './styles';

export const Outset: React.FC = () => {
  const {user} = useAuth();
  const navigate = useNavigate()
  const {handleGetUserProjects, handleCreateProject} = useHandleQuery()

  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState<Projects>();
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
      
      toast.success('Projecto Criado !', {
        position: toast.POSITION.TOP_RIGHT,
        delay:50
      });
      
      const projects = await handleGetUserProjects(user.id)

      setProjects(projects);

      handleRequestCloseModal()
    }
  }

  return(
    <Container>
        <CardAddNewProject handleClick={()=>setOpenModal(true)}/>

        <h4>Projectos em que és Administrador</h4>
        <ProjectContent>
          {projects && (projects.adminProjects.map(project=>
              <CardProject key={project.id} data={project}/>
          ))}
        </ProjectContent>

        <h4>Pojectos em que participas</h4>
        <ProjectContent>
          {projects && (projects.othersProjects.map(project=>
            <CardProject key={project.id} data={project}/>
          ))}
        </ProjectContent>
        
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