
export const resetLink = async (request, response) => {
    try {
        console.log("hle");
        console.log(req.body);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}
