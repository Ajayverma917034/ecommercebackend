
import Fashion from '../model/fashion-schema.js';
import Fashion1 from '../model/fashion-schema1.js';

export const getFashion = async (request, response) => {
    try {
        const fashion = await Fashion.find();
        response.status(200).json(fashion);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}

export const getFashion1 = async (request, response) => {
    try {
        const fashion1 = await Fashion1.find();
        response.status(200).json(fashion1);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}




