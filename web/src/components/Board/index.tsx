import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useHandleQuery } from '../../hooks/useHandleQueryUser';
import { loadLists } from '../../services/api';
import { ListType, ProjectDataType } from '../../types';
import { List } from '../List';

import { Container } from './styles';

const lists = loadLists() as ListType[];

export const Board: React.FC = () => {
  const {projectId} = useParams();
  const {getProjectTasks} = useHandleQuery();

  const {data,isFetching} = useQuery('projectData',async ()=>{
    const tasks = await getProjectTasks(projectId!);
    return tasks;
  })

  if (isFetching) {
    return(
        <>
            Carreggando.....
        </>
    )
  }

  if (data) {
    const todoTask = data.filter(task=>task.status === 'todo');
    const processTask = data.filter(task=>task.status === 'process')
    const stopedTask = data.filter(task=>task.status === 'stoped')
    const doneTask = data.filter(task=>task.status === 'done')
  
    return(
      <Container>
        <List creatable title='Tarefas' tasks={todoTask}/>
        <List title='Fazendo' tasks={processTask}/>
        <List title='Pausado' tasks={stopedTask}/>
        <List done title='Concluído' tasks={doneTask}/>
      </Container>
    );
  }

  return<></>
}