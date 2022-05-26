import {model} from 'mongoose';
import {OrderSchema} from '../schemas/order-schema';

const Order = model('orders', OrderSchema);

export class OrderModel {
  // 주문 조회(회원)
  async findById(userId) {
    const order = await Order.findOne({userId: userId});
    return order;
  }
  // 주문 조회(비회원)
  async findById(fullname, phoneNumber) {
    const filter = {fullname: fullname, phoneNumber: phoneNumber};
    const order = await Order.findOne(filter);
    return order;
  }
  // 주문 조회(관리자)
  async findAll() {
    const orders = await Order.find({});
    return orders;
  }
  // 주문 추가
  async create(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }
  // 주문 상태 변경(취소, 완료)
  async update(orderId, update) {
    const filter = {_id: orderId};
    const option = {returnOriginal: false};

    const updatedOrder = await Order.findByIdAndUpdate(filter, update, option);
    return updatedOrder;
  }
}

const orderModel = new OrderModel();

export {orderModel};
