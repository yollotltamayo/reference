import mongoose from 'mongoose'
const { Schema } = mongoose

export const postSchema = new Schema({
    content:  String,
    tags:[String],
    upvotes:Number,
    author:  String,
    date: { type: Date, default: Date.now },
    description:  String
    //comments: [{ body: String, date: Date 
})
export const userSchema = new Schema({
    type: String,
    location: String,
    bio: String,
    refs: [String],
    favs: [String],
    posts: [String],
    git_id: String
})
export const contenidoSchema = new Schema({
    sku:String,
    autor:String,
    codigo:String
})

