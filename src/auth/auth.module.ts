import { Module, Options } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[PassportModule, UsersModule, JwtModule.register({
        secret:"adfjakfljaflsfslfjslfksjflsafsalfsjflafffljsafsaljflf",
        signOptions:{expiresIn:'60s'},
    })],
    providers:[LocalStrategy, AuthService, JwtStrategy],
    exports:[AuthService],
})
export class AuthModule {}
