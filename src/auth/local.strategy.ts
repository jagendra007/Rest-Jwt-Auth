import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: UsersService) {
        super();
    }

    validate(username: string, password: string): User {
        const user: User = this.userService.getUserByUserName(username);
        if (user === undefined) throw new UnauthorizedException();
        if (user !== undefined && user.password) {
            return user;
        }
        else {
            throw new NotFoundException();
        }
    }
}