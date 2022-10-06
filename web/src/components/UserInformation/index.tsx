import { UserInfo} from "../../types";
import { Button } from "../FormElement/styles";
import { FigureMain, UserInformationContainer, UserNumber } from "./styles";

import avatar from '../../assets/avatar.png'

interface UserInformationProps {
    user:UserInfo
}
 
export  function UserInformation({user}:UserInformationProps){
    return ( 
    <>
    <UserInformationContainer>
        <FigureMain>
            <figure>
                <img
                    src={user.avatarImg?user.avatarImg:avatar}
                    alt={user.name}
                />
            </figure>
            <Button type="submit">Munda a Foto</Button>
        </FigureMain>
        <div>
            <p>Nome <span>{user.name}</span></p>
            <p>Email <span>{user.email}</span></p>
        </div>
    </UserInformationContainer>
    <UserNumber>
        <p>Números de Projectos <span>{
            user.projects.adminProjects.length +
            user.projects.othersProjects.length
        }</span></p>
        <p>Números de Tarefas <span>{user.tasks.length}</span></p>
    </UserNumber>
    </>
     );
}
 
export default UserInformation;