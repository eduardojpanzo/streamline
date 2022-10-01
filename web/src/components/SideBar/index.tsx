import { MdHome, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container, Logo, MenuVertical, UserSection } from './styles';
import avatar from '../../assets/avatar.png'

export const SideBar = () => {
    const {user} = useAuth();

  return (
    <Container>
        <div>
            <Logo>S</Logo>
            <MenuVertical>
                <ul>
                    <li><Link to={`/`} className='active'><MdHome/> Inicial</Link></li>
                    {user &&(
                        <li><Link to={`/projects`}><MdSettings/> Projectos</Link></li>
                    )}
                    {/* {<li><Link to={`/settings`}>Setting</Link></li>} */}
                </ul>
            </MenuVertical>
        </div>

        {user && (
        <UserSection>
            <div className="avatar">
                <img
                    src={user.avatar_img?user.avatar_img:avatar}
                    alt={user.name}
                />
            </div>
            <span>{user.name}</span>
        </UserSection>
        )}
    </Container>
  );
}