import {Schema} from 'mongoose';

const SizeSchema = new Schema(
    {
      sizeName: {
        type: String,
        required: true,
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {SizeSchema};
