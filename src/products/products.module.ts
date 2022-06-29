import { forwardRef, Module } from "@nestjs/common";
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule),
  ]
})
export class ProductsModule {}
