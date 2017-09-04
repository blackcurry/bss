import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Book = new Schema({
    title: String,
    link: String,
    image: String,
    author: String,
    price: String,
    discount:String,
    publisher:String,
    pubdate:String,
    isbn:String,
    description:String,
    subscriber:{ type: String, default: 'ADMIN'},
    created: { type: Date, default: Date.now }
});

export default mongoose.model('book', Book);
