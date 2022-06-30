import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaM} from 'mongoose';
import { User } from 'src/users/user.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  address: string;

  @Prop({required: true})
  phone: string;

  @Prop({ type: Object, required: true})
  cart: {};

  @Prop({ type: SchemaM.Types.ObjectId, ref: User.name, required: true })
  owner: User;
}

export const OrderSchema = SchemaFactory.createForClass(Order);