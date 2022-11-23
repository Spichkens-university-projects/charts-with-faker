import {faker} from '@faker-js/faker';
import {IUser} from "../types/user.interface";

function createRandomUser(): IUser {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        birthdate: faker.date.birthdate(),
        city: faker.address.city(),
        registeredAt: faker.date.past(),
    };
}

export const getUsersArray = () => {
    const arr: IUser[] = []
    for (let i = 0; i < 50; i++) {
        arr.push(createRandomUser())
    }
    return arr
}
