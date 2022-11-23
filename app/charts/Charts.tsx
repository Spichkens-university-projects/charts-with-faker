import {FC, PropsWithChildren} from 'react'
import {IUser} from "../types/user.interface";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import PieChart from "./PieChart";

interface Props {
    users: IUser[]
}

const Charts: FC<PropsWithChildren<Props>> = ({users}) => {
    return (
        <div>
            <BarChart users={users}/>
            <PieChart users={users}/>
            <BubbleChart/>
        </div>
    )
}

export default Charts