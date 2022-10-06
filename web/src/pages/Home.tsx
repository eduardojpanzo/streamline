import { useAuth } from "../hooks/useAuth";
import { Apresetetion, Container} from "../styles/home";
import UserInformation from "../components/UserInformation";
import { Outset } from "../components/Outset";

export const Home = () => {
    const {user} = useAuth();    
    return ( 
        <Container>
        {user?(
        <>
            <UserInformation user={user}/>
            <Outset/>
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