const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    // cardlist : {
    //     type: String,
    //     required: true
    //   },
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
 
});

// const cardlistSchema = new Schema({
//     cartlist :{
//         type: String,
//         required: true
//     },

//     products: productSchema
// }) 
productSchema.set('timestamps', true)

module.exports = mongoose.model('Product', productSchema);