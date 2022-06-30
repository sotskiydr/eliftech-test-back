import {ApiProperty} from "@nestjs/swagger";
import { IsEmail, IsObject, IsString, Length } from "class-validator";

interface IOrders {
  id: number,
  name: string,
  image: string,
  price: number,
  amount: number
}

interface ICart {
  amount: number;
  cart: IOrders[];
}

export class CreateUserDto {

  @ApiProperty({example: 'John', description: "user name"})
  @IsString({message: 'name must be string'})
  readonly name: string;

  @ApiProperty({example: 'user@gmail.com', description: 'email'})
  @IsString({message: 'email must be is string'})
  @IsEmail({}, {message: 'incorrect email'})
  readonly email: string;

  @ApiProperty({example: '380935789402', description: 'user phone'})
  @IsString({message: 'phone must be is string'})
  readonly phone: string;

  @ApiProperty({example: '174 Antonovycha street' +
      'Kyiv', description: 'user address'})
  @IsString({message: 'address must be is string'})
  readonly address: string;

  @ApiProperty({example: '{cart: [{},{}], amount: 30}', description: 'cart data'})
  @IsObject({message: 'cart must be is object'})
  readonly cart: ICart;
}