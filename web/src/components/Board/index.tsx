import { loadLists } from '../../services/api';
import { ListType } from '../../types';
import { List } from '../List';

import { Container } from './styles';

const lists = loadLists() as ListType[];

export const Board: React.FC = () => {
  return(
    <Container>
      {lists.map(list=><List key={list.title} data={list}/>)}
    </Container>
  );
}