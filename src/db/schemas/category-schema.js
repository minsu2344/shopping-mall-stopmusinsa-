import {Schema} from 'mongoose';

const CategorySchema = new Schema(
    {
      item: {
        type: String,
        required: true,
      },
      subItem: {
        type: String,
        ref: 'subCategories',
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {CategorySchema};
