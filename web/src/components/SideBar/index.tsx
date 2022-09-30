import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container, Logo, MenuVertical, UserSection } from './styles';

export const SideBar = () => {
    const {user} = useAuth();

  return (
    <Container>
        <div>
            <Logo>S</Logo>
            <MenuVertical>
                <ul>
                    <li><Link to={`/`} className='active'>Home</Link></li>
                    <li><Link to={`/boardTask`}>Tasks</Link></li>
                    <li><Link to={`/settings`}>Setting</Link></li>
                </ul>
            </MenuVertical>
        </div>

        <UserSection>
            <div className="avatar">
                <img src={user?.avatar_img} alt={user?.name} />
            </div>
            <span>{user?.name}</span>
        </UserSection>
    </Container>
  );
}