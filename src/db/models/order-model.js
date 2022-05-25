import {model} from 'mongoose';
import {OrderSchema} from '../schemas/order-schema';

const Order = model('orders', OrderSchema);

export class OrderModel {
  // 주문 조회(유저)
  async findById(userId) {
    const order = await Order.findOne({user: userId});
    return order;
  }
  // 주문 추가
  async create(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }
  // 주문 조회(관리자)
  async findAll() {
    const orders = await Order.find({});
    return orders;
  }
  // 주문 삭제
  async delete(userId) {
    if (userId) {
      return await Order.deleteMany({user: userId});
    } else {
      return await Order.deleteMany({});
    }
  }
}

const orderModel = new OrderModel();

export {orderModel};
