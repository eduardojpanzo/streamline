import { Container, Logo, MenuVertical, UserSection } from './styles';

export const SideBar = () => {
  return (
    <Container>
        <div>
            <Logo>S</Logo>
            <MenuVertical>
                <ul>
                    <li><a href="#" className='active'>Home</a></li>
                    <li><a href="#">Tasks</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </MenuVertical>
        </div>

        <UserSection>
            <div className="avatar">
                <img src="" alt="" />
            </div>
            <span>Name user</span>
        </UserSection>
    </Container>
  );
}