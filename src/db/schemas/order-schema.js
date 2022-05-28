import {Schema} from 'mongoose';

const OrderSchema = new Schema(
    {
      products: [{
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true,
        count: {
          type: Number,
          required: true,
        },
      }],
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    {
      collection: 'orders',
      timestamps: true,
    },
);

export {OrderSchema};
