import { UserType } from "../../types"
import { Button } from "../FormElement/styles"
import { UserItem } from "./styles"

interface UserProps{
    data: UserType
    type:string
}

export const CardUser = ({data, type}:UserProps)=>{
    return(
    <UserItem>
        <div className={`avatar`}>
            <img src={data.avatarImg} alt={data.name} />
        </div>
        <div className={`name`}>
            <p>{data.name}</p>
        </div>
        <div className="btn">
            <Button>{type}</Button>
        </div>
    </UserItem>
    )
  }