import {Schema} from 'mongoose';

const ProductSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      brand: {
        type: String,
        required: true,
      },
      sex: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {ProductSchema};
