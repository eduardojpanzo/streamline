import { useState } from 'react';
import {MdAdd} from 'react-icons/md'
import ReactModal from 'react-modal';
import { ListType } from '../../types';
import { Card } from '../Card';

import { Container } from './styles';
interface ListProps{
  data:ListType;
}

export const List = ({data}:ListProps) => {
  const [openModal,setOpenModal] = useState(false)
  return(
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable &&(
          <button type='button' onClick={()=>setOpenModal(true)}>
            <MdAdd size={24} color='#fff'/>
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card=><Card key={card.id} data={card}/>)}
      </ul>

      <ReactModal
         isOpen={openModal}
         onRequestClose={()=>setOpenModal(false)}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >

      </ReactModal>
    </Container>
  );
}