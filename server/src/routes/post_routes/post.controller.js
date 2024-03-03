const { default: mongoose } = require('mongoose');
const PostModel = require('../../models/post');

const createPost = async (req, res) => {
    try {
        const files = req.files
        const media = files.map((val, i) => {
            return {
                type: val.mimetype == "video/mp4" ? "video" : "image",
                url: val.location
            }
        })
        req.body.media = media
        // console.log(req.body)
        const result = await PostModel.create(req.body)
        res.send({
            data: result,
            status: true
        })
    } catch (error) {
        res.status(403).json({ status: false, error: error })
    }
}

const fileUpload = async (req, res) => {
    if (!req?.file) {
        res.status(403).json({ status: false, error: "please upload a file" })
        return;
    }
    let data = {}
    if (!!req?.file) {
        data = {
            url: req.file.location,
            type: req.file.mimetype
        }
    }
    try {
        res.send({
            data: data,
            status: true
        })
    } catch (error) {
        res.status(403).json({ status: false, error: error })
    }
}

const allPosts = async (req, res) => {
    // console.log("all post", req.query)

    const limit = parseInt(req.query.limit) || 10
    const page = parseInt(req.query.page) || 1
    const userId = req.query.userId

    const totalPosts = await PostModel.countDocuments({})
    // console.log("totalPosts", totalPosts)

    const totalPages = Math.ceil(totalPosts / limit)
    const startIndex = (page - 1) * limit

    try {
        const result = await PostModel.aggregate([
            {
                $lookup: {
                    from: "likes",
                    let: { postId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ['$postId', '$$postId'] },
                                        { $eq: ['$userId', new mongoose.Types.ObjectId(userId)] }
                                    ]
                                },
                            },
                        },
                    ],
                    as: 'likes'
                },
            },
            {
                $addFields: {
                    isLike: {
                        $cond: {
                            if: { $gt: [{ $size: '$likes' }, 0] },
                            then: true,
                            else: false
                        }
                    }
                }
            },

            {
                $lookup: {
                    from: "users", // Replace with the actual collection name for user data
                    localField: "userId", // Assuming "userId" is the field in PostModel that links to users
                    foreignField: "_id", // Assuming user documents have "_id" field
                    as: "user"
                },
            },
            {
                $unwind: "$user"
            },
            {
                $project: {
                    likes: 0,
                    "user.password": 0,
                    "user.token": 0,
                    "user.isDeleted": 0,
                    "user.links": 0,
                    "user.deviceType": 0,
                    "user.fcmToken": 0
                }
            },
            {
                $skip: startIndex,
            },
            {
                $limit: limit,
            },
            {
                $sort: { createdAt: -1 },
            },
        ])
        res.send({
            data: result,
            status: true,
            totalPages: totalPages,
            page: page
        })
    } catch (error) {
        console.log("errorerror", error)
        res.status(403).json({ status: false, error: error })
    }
}


const myPosts = async(req, res) =>{

    const limit = parseInt(req.query.limit) || 10
    const page = parseInt(req.query.page) || 1
    const userId = req.query.userId


    const totalPots = await PostModel.countDocuments({userId})

    // console.log("totalPots",totalPots)

    const totalPages = Math.ceil(totalPots/limit)
    const startIndex = (page - 1) * limit
        try {
            const result = await PostModel.find({userId}).populate({path:"userId", select:"userName fullName"}).skip(startIndex).limit(limit).exec()
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
    createPost,
    allPosts,
    fileUpload,
    myPosts
    
}