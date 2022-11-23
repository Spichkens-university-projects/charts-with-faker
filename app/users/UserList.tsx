import {FC} from 'react'
import {IUser} from "../types/user.interface";
import UserItem from "./UserItem";

interface Props {
    users: IUser[]
}

const UserList: FC<Props> = ({users}) => {
    return (
        <div className={'flex flex-col'}>
            {users?.map((user: IUser) => <UserItem key={user.userId} user={user}/>)}
        </div>
    )
}

export default UserList