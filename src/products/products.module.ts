import { forwardRef, Module } from "@nestjs/common";
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./products.schema";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    MongooseModule.forFeature([{
      name: Order.name, schema: OrderSchema
    }]),
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule),
  ]
})
export class ProductsModule {}
