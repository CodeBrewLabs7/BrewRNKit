const LikeModel = require('../../models/like');
const PostModel = require('../../models/post')


const likeDislike = async (req, res) => {
    const {postId, userId} = req.body
    const existingLike = await LikeModel.findOne({postId,userId })
    try {
        if(!existingLike){
            await LikeModel.create(req.body)
            await PostModel.findByIdAndUpdate(
                postId,
                {$inc: {likeCount: 1}},
                {new: true}
            )
            return res.status(200).json({message: "Like added sucessfully..!!"})
        }else{
            await LikeModel.findByIdAndRemove(existingLike._id)
            await PostModel.findByIdAndUpdate(
                postId,
                {$inc: {likeCount: -1}}
            )
            return res.status(200).json({message: "Like removed sucessfully..!!"})
        }
    } catch (error) {
        res.status(403).json({ status: false, error: error })
    }
}

const postLikes = async (req, res) => {
    console.log("post likes", req.query)
    const {postId, page,limit} = req.query

    const totalComments = await LikeModel.countDocuments({postId})
    const totalPages = Math.ceil(totalComments/limit)
    const startIndex = (page - 1) * limit

        try {
            const result = await LikeModel.find({postId: postId}).populate({path:"userId", select:"userName fullName"}).skip(startIndex).limit(limit).exec()
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
    likeDislike,
    postLikes
}