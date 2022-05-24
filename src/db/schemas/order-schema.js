import {Schema} from 'mongoose';
import {UserSchema} from './user-schema';

const OrderSchema = new Schema(
    {
      products: [UserSchema],
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {OrderSchema};
