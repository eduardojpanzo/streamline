import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Button } from '../components/FormElement/styles';
import { api } from '../services/api';
import {Container, UserItem, UsersField} from '../styles/project'

import { ProjectInfo, UserType } from '../types';

interface UserProps{
    data: UserType
    type:string
}

export const Project = () => {
    const {projectId} = useParams();

    const {data,isFetching} = useQuery<ProjectInfo>('projectData',async ()=>{
        const res = await api.get(`/projects/${projectId}`);
        const project = await res.data;

        return project;
    })

    if (data) {
        return ( 
            <Container>
                <header>
                    <h3>{data.project.name}</h3>
                    <p>{data.project.description}</p>
                </header>
                <fieldset>
                    <p>Números de Tarefas: {data.tasks.length}</p>
                </fieldset>
    
                <UsersField>
                    {data.users.admins.map(admin=>
                        <UserCard data={admin} type="admin" key={admin.id}/>
                    )}

                    {data.users.members.map(member=>
                        <UserCard data={member} type="member" key={member.id}/>
                    )}
                </UsersField>

                <footer>
                    colocar um formulario para adicionar e remover admin, member
                </footer>
            </Container>
        );
    }
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