import { User } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetUsersOutDto {
  @ApiProperty()
  users: Array<User>;
}