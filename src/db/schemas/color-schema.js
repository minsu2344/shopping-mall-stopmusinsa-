import {Schema} from 'mongoose';

const ColorSchema = new Schema(
    {
      colorName: {
        type: String,
        required: true,
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {ColorSchema};
