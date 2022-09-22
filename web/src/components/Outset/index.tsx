import { useState } from 'react';
import ReactModal from 'react-modal';
import { CardAddNewProject, CardProject } from '../Card';
import { Container } from './styles';

export const Outset: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleRequestCloseModal = ()=>{
    setOpenModal(false)
  }

  return(
    <Container>
        <CardAddNewProject handleClick={()=>setOpenModal(true)}/>
        <CardProject/>
        <ReactModal
         isOpen={openModal}
         onRequestClose={handleRequestCloseModal}
         style={
             {content:{height:"max-content",width:"max-content",margin:"0 auto"}}
         }
        >

        </ReactModal>
    </Container>
  );
}