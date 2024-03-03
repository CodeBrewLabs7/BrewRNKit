const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
userId: {type: ObjectId, required: true, ref: 'User'},
postId: {type: ObjectId, required: true, ref: 'Post'},
comment: {type: String, required: true}
},{timestamps: true})

module.exports = mongoose.model("Comment", commentSchema)



