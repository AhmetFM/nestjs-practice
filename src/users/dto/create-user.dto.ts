import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

/*
    Using Class-Validator package for validating data. This is the suggested way to validate and also you can use Zod. U already know.
*/
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid roles are INTERN, ENGINEER, and ADMIN',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
