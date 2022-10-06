import { useAuth } from '../../hooks/useAuth';
import { Container, Logo, UserSection } from './styles';
import avatar from '../../assets/avatar.png'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export const SideBar = () => {
    const navigate = useNavigate()
    const {user,logout} = useAuth();
    const MenuAvatarElement = useRef<HTMLUListElement>(null);


    const handleLogout = ()=> {
        logout();
        navigate('/')
    }

    const handleToggleShowMenu = ()=>{
        MenuAvatarElement.current?.classList.toggle('flex');
    }

  return (
    <Container>
        <Logo>
            <Link to={'/'}><h1>S</h1></Link>
        </Logo>

        {user && (
        <UserSection>
            <div className="avatar" onClick={handleToggleShowMenu}>
                <img
                    src={user.avatarImg?user.avatarImg:avatar}
                    alt={user.name}
                />
                <ul ref={MenuAvatarElement}>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
        </UserSection>
        )}
    </Container>
  );
}