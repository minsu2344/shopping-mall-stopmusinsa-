import {model} from 'mongoose';
import {OrderSchema} from '../schemas/order-schema';

const Order = model('orders', OrderSchema);

export class OrderModel {
  async findByEmail(email) {
    const user = await User.findOne({email});
    return user;
  }

  async findById(userId) {
    const user = await User.findOne({_id: userId});
    return user;
  }
  // 주문 추가
  async create(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async update({userId, update}) {
    const filter = {_id: userId};
    const option = {returnOriginal: false};

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }
}

const orderModel = new OrderModel();

export {orderModel};
