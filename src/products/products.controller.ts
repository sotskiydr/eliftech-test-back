import { Controller, Get, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({summary: 'Get all shops'})
  @Get('/get-shops')
  @UseGuards(JwtAuthGuard)
  login(){
    return this.productsService.getCategories()
  }

}
