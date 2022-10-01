import { useAuth } from "../hooks/useAuth";
import avatar from '../assets/avatar.png'
import { Apresetetion, Container, UserInformation, UserNumber } from "../styles/home";

export const Home = () => {
    const {user} = useAuth();
    return ( 
        <Container>
        {user?(
        <>
            <UserInformation>
                <figure>
                <img
                    src={user.avatar_img?user.avatar_img:avatar}
                    alt={user.name}
                />
                </figure>
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            </UserInformation>
            <UserNumber>
                <p>Números de Projectos: 2</p>
                <p>Números de Tarefas: 4</p>
            </UserNumber>
        </>
        ):(
        <Apresetetion>
            <h1>StreamLine</h1>
            <p>
                Gerencie as Tarefas de seus Projectos e controle o desenvolvimento dos projectos e do seu time com a <span>StreamLine</span>
            </p>
        </Apresetetion>
        )}
        </Container>
     );
}