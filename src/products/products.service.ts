import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as data from '../data/shops.json'
import { CreateUserDto } from "./dto/makeOrderDto.dto";
import { User } from "../users/user.schema";
import { Order, OrderDocument } from "./products.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Order.name) private orderSchema: Model<OrderDocument>) {}

  getCategories() {
    return data.shops;
  }

  async createOrder(makeOrder: CreateUserDto, owner: User) {
    const newOrder =  new this.orderSchema({...makeOrder, owner})
    await newOrder.save()
    return newOrder
  }

  async getOwnOrders(id: number) {
    const orders = await this.orderSchema.find({ owner: id })
    if (orders) {
      return orders;
    }
    throw new HttpException('not found orders', HttpStatus.NOT_FOUND)
  }
}
