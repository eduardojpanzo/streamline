import {MdAdd} from 'react-icons/md'
import { ListType } from '../../types';
import { Card } from '../Card';

import { Container } from './styles';
interface ListProps{
  data:ListType;
}

export const List = ({data}:ListProps) => {
  return(
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable &&(
          <button type='button'>
            <MdAdd size={24} color='#fff'/>
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card=><Card key={card.id} data={card}/>)}
      </ul>
    </Container>
  );
}