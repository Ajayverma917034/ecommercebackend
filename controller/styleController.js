import Style from "../model/style-schema.js";


export const getStyles = async (request, response) => {
    try {
        const style = await Style.find();
        response.status(200).json(style);

    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}