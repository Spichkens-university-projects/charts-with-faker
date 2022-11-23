import Image from "next/image";
import {FC, PropsWithChildren} from 'react'
import {IUser} from "../types/user.interface";

import styles from "./UserItem.module.css"

interface Props {
    user: IUser
}

const UserItem: FC<PropsWithChildren<Props>> = ({children, user}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Image src={user.avatar} alt={'Аватар'} width={70} height={70}
                       className={styles.avatar}/>
            </div>
            <div className={'flex flex-col'}>
                <div className={styles.username}>{user.username}</div>
                <div className={styles.secondary}>Email: {user.email}</div>
                <div className={styles.secondary}>City: {user.city}</div>
                <div className={styles.date}>Birthdate: {user.birthdate.toDateString()}</div>
                <div className={styles.date}>Registered at: {user.registeredAt.toDateString()}</div>
            </div>
        </div>
    )
}

export default UserItem