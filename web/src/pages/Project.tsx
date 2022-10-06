import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CardUser } from '../components/Card';
import { FormControl, Loader } from '../components/FormElement';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';
import {Container,DeleteProject,NewUser,UsersField} from '../styles/project'

import { ProjectInfo} from '../types';

function ProjectPage() {
    const {user} = useAuth();
    const navigate = useNavigate()
    const [projectInfo, setProjectInfo] = useState({} as ProjectInfo);
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const {projectId} = useParams();

    const {data,isFetching} = useQuery<ProjectInfo>('projectData',async ()=>{
        const res = await api.get(`/projects/${projectId}`);
        const data = await res.data;

        setProjectInfo(data);
        return data;
    })

    const handleSetUserType = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserType(e.target.value);
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const handleAddNewUserInProject = async (event:FormEvent)=>{
        event.preventDefault();

        if (!userType) {
            toast.error('Selecione a tipo de usuario a adicionar!');
            return
        }

        if (user) {
            try {
                await api.post(`/usersProjects/${userType}`,{
                    userId:user.id,
                    email,
                    projectId:projectInfo.project.id,
                });
                    
                toast.success('Adicionado com sucesso !');

                navigate(`/projects/${projectInfo.project.id}`);

                setProjectInfo(data!);
            } catch (err) {
                toast.error('Não lhe é permitido adicionar');
            }
        }
    }

    const handleDeleteProject = async(event:FormEvent)=>{
        event.preventDefault();

        if (user) {

            try {
                await api.delete(`/projects/delete`,{
                
                    data:{
                        userId: user.id,
                        projectId: projectInfo.project.id
                    }
                });

                toast.success('Projecto Eliminado !',);
                navigate("/projects");

            } catch (err) {
                toast.error(`${err}`);
            }
        }
    }

    if (isFetching) {
        return<Loader/>
    }

    return ( 
        <Container>
            <header>
                <h3>{projectInfo.project.name}</h3>
                <p>{projectInfo.project.description}</p>
            </header>
            <fieldset>
                <p>Números de Tarefas: {projectInfo.tasks.length}</p>
            </fieldset>

            <UsersField>
                {projectInfo.users.admins.map(admin=>
                    <CardUser data={admin} type="admin" key={admin.id}/>
                )}

                {projectInfo.users.members.map(member=>
                    <CardUser data={member} type="member" key={member.id}/>
                )}
            </UsersField>

            <footer>
                <NewUser onSubmit={handleAddNewUserInProject}>
                    <p>Novo Usuário</p>
                    <fieldset>
                        <FormControl
                            name='type'
                            type='radio'
                            value='admin'
                            handleChange={handleSetUserType}
                        >Administrador</FormControl>
                        <FormControl
                            name='type'
                            type='radio'
                            value='member'
                            handleChange={handleSetUserType}
                        >Membro</FormControl>
                    </fieldset>

                    <FormControl
                        name='email'
                        type='email'
                        handleChange={handleChange}
                    >Email:</FormControl>

                    <button type='submit'>Adicionar</button>
                </NewUser>

                <DeleteProject onSubmit={handleDeleteProject}>
                    Deletar o Projecto Atual
                    <button type="submit">Deletar</button>
                </DeleteProject>
            </footer>
        </Container>
    );
}

export default ProjectPage