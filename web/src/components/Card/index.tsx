import { CardType } from '../../types';
import { Container, Label } from './styles';

interface CardProps{
  data:CardType;
}
export const Card= ({data}:CardProps) => {
  return (
    <Container>
      <header>
        <Label color={data.labels[0]}/>
      </header>
      <p>{data.content}</p>
      <img src={data.user} alt={``} />
    </Container>
  );
}