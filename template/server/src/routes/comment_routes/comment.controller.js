const CommentModel = require('../../models/comment');
const PostModel = require('../../models/post')


const addComment = async (req, res) => {
    const {postId} = req.body
    try {
        const result = await CommentModel.create(req.body)
        await PostModel.findByIdAndUpdate(
            postId,
            {$inc: {commentCount: 1}},
            {new: true}
        )
       res.send({
        status: 200,
        message: "comment added succesfully..!!",
        data: result
       }) 
    } catch (error) {
        res.status(403).json({ status: false, error: error })
    }
}

const deleteComment = async (req, res) => {
        const {commentId, userId} = req.body
        try {
            const deleteComment = await CommentModel.findByIdAndDelete({_id: commentId,userId })

            if(!!deleteComment){
                await PostModel.findByIdAndUpdate(
                    deleteComment.postId,
                    {$inc: {commentCount: -1}},
                    {new: true}
                )
            res.send({
                data: "comment deleted succesfully..!!",
                status: 200
            })
            }else{
                res.status(403).json({status: false, message:"Commnet not deleted" })
            }
            
            
        } catch (error) {
            res.status(403).json({status: false, error:error })
        }
}

const postComments = async(req, res) =>{

    const limit = parseInt(req.query.limit) || 10
    const page = parseInt(req.query.page) || 1
    const postId = req.query.postId


    const totalComments = await CommentModel.countDocuments({postId})
    console.log("totalComments",totalComments)

    const totalPages = Math.ceil(totalComments/limit)
    const startIndex = (page - 1) * limit
        try {
            const result = await CommentModel.find({postId: postId}).populate({path:"userId", select:"userName fullName"}).skip(startIndex).limit(limit).exec()
            res.send({
                data: result,
                status: true,
                currentPage: page,
                totalPages: totalPages
            })
        } catch (error) {
            res.status(403).json({status: false, error:error })
        }
}



module.exports = {
    addComment,
    deleteComment,
    postComments
}