import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { Container } from './styles';
import { RoutesComponent } from '../routes';

export const Layout: React.FC = () => {
  return(
    <Container>
        <SideBar/>
        <section>
            <Header/>
            <RoutesComponent/>
        </section>
    </Container>
  );
}