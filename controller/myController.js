import My from "../model/my-schema";

export const getMy = async (request, response) => {
    try {
        const my = await My.find();
        response.status(200).json(my);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}