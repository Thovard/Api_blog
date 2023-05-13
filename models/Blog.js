const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 4,
  },
  desc: {
    type: String,
    required: true,
    min: 12,
  },
  photo: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    default: []
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // adiciona a propriedade 'posts' como um array de referências ao modelo 'Post'
}, { timestamps: true });

module.exports = mongoose.model('posts', BlogSchema);
