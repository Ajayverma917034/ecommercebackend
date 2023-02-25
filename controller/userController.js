// import { request } from "express";
import { response } from "express";
import UserSchemaValue from "../model/user-schema.js";

export const usersingup = async (request, response) => {
    try {
        const exist = await UserSchemaValue.findOne({ username: request.body.username })

        if (exist) {
            return response.status(401).json({ message: "Username already exits" })
        }

        const user = (request.body);
        // console.log(`${request.body} this is data`);
        const newUser = new UserSchemaValue(user);
        await newUser.save();

        response.status(200).json({ message: user });
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
}

export const userlogin = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;

        let user = await UserSchemaValue.findOne({ username: username, password: password });
        // console.log(user);
        if (user) {
            return response.status(200).json({ data: user })
        }
        else
            return response.status(401).json(`invalid login`);
    } catch (err) {
        response.status(500).json("Error", err.message);
    }
}
