import { useBoard } from '../../hooks/useBoard';
import { Loader } from '../FormElement';
import { List } from '../List';

import { Container } from './styles';


export const Board = () => {
  const {data, isFetching} = useBoard();

  if (isFetching) {
    return<Loader/>
  }

  if (data) {
    const todoTask = data.filter(task=>task.status === 'todo');
    const processTask = data.filter(task=>task.status === 'process')
    const stopedTask = data.filter(task=>task.status === 'stoped')
    const doneTask = data.filter(task=>task.status === 'done')
  
    return(
      <Container>
        <List list={'todo'} creatable title='Tarefas' tasks={todoTask}/>
        <List list={'process'} title='Fazendo' tasks={processTask}/>
        <List list={'stoped'} title='Pausado' tasks={stopedTask}/>
        <List list={'done'} done title='Concluído' tasks={doneTask}/>
      </Container>
    );
  }

  return<></>
}