import Like from "../model/like-schema.js";


export const getLikes = async (request, response) => {
    try {
        const like = await Like.find();
        response.status(200).json(like);
    } catch (err) {
        response.status(500).json({ smessage: err.message });
    }
}


export const getLikeById = async (request, response) => {
    try {
        const id = request.params.id;
        const product = await Like.findOne({ 'id': id })
        response.status(200).json(product);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}


