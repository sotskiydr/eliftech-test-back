import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateUserDto } from "./dto/makeOrderDto.dto";


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({summary: 'Get all shops'})
  @Get('/get-shops')
  @UseGuards(JwtAuthGuard)
  login(){
    return this.productsService.getCategories()
  }

  @Post('/make-order')
  @UseGuards(JwtAuthGuard)
  createOrder(@Body() createUserDto: CreateUserDto, @Req() req){
    return this.productsService.createOrder(createUserDto, req.user.id)
  }

  @ApiOperation({summary: "Own orders"})
  @Get('/get-orders')
  @UseGuards(JwtAuthGuard)
  getOwnOrders(@Req() req) {
    return this.productsService.getOwnOrders(req.user.id);
  }
}
