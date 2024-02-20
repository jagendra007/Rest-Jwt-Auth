import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { CONSTANTS } from './constants';

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            username: "User1",
            password: "admin",
            email: "user1@gmail.com",
            age: 23,
            role:CONSTANTS.ROLES.DEVELPOER
        },
        {
            username: "User2",
            password: "admin",
            email: "user2@gmail.com",
            age: 21,
            role:CONSTANTS.ROLES.TESTER
        },
        {
            username: "User3",
            password: "admin",
            email: "user3@gmail.com",
            age: 22,
            role:CONSTANTS.ROLES.DEVELPOER
        },
    ]

    getUserByUserName(username: string): User {
        return this.users.find(user => user.username === username );
    }
}
