const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
media: {
    type: String, 
    required: false,
    default:"https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg"
},
title:{type: String, required: true},
description: {type: String},
userId: {type: ObjectId, required: true, ref: 'User'},
likeCount: {type: Number, default: 0},
commentCount: {type: Number, default: 0},
},{timestamps: true})

module.exports = mongoose.model("Post", postSchema)



