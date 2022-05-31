import {model} from 'mongoose';
import {ProductSchema} from '../schemas/product-schema';

const Product = model('products', ProductSchema);

export class ProductModel {
  // 상품 상세
  async findById(productId) {
    const product = await Product.findOne({_id: productId});
    return product;
  }
  // 상품 추가
  async create(productInfo) {
    const createdNewProduct = await Product.create(productInfo);
    return createdNewProduct;
  }

  // 상품 목록
  async findAll() {
    const products = await Product.find({})
        .populate('colors.color')
        .populate('sizes.size')
        .populate('categories');

    return products;
  }
  // 상품 목록 with 페이지네이션
  async findByPage(page, show) {
    const products =
      await Product.find({})
          .sort({createdAt: -1})
          .skip(show*(page-1))
          .limit(show)
          .populate('colors')
          .populate('sizes')
          .populate('categories');
    return products;
  }
  // 카테고리 추가, 카테고리 수정, 상품 수정
  async update(productId, update) {
    const filter = {_id: productId};
    const option = {returnOriginal: false};

    const updatedProduct = await Product.findOneAndUpdate(filter, update, option);
    return updatedProduct;
  }

  async delete(productId) {
    if (!productId) {
      await Product.deleteMany();
    } else {
      await Product.deleteOne({_id: productId});
    }
  }
}

const productModel = new ProductModel();

export {productModel};