import {useEffect, useState} from "react";
import Charts from "../app/charts/Charts";
import {getUsersArray} from "../app/faker/fake.users";
import {IUser} from "../app/types/user.interface";
import UserList from "../app/users/UserList";

export default function Home() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        setUsers(getUsersArray())
    }, [])

    return (
        <>
            <UserList users={users}/>
            <Charts users={users}/>
        </>
    )

}
