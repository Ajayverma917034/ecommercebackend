
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

import { fashion } from "./constants/fashionData.js"
import Fashion from "./model/fashion-schema.js";

// import { products } from "./constants/data.js";
import { mobileData } from "./constants/mobileData.js";
import Like from "./model/like-schema.js";


import { styleData } from './constants/allData.js';
import Style from "./model/style-schema.js";

const DefaultData = async () => {
    try {
        await Style.insertMany(styleData);
        await Like.insertMany(mobileData);
        await Fashion.insertMany(fashion);
        await Product.insertMany(mobileData);
        console.log(`Data imported sucessfully`)
    } catch (err) {
        console.log(`Error while inserting defalult data`, err.message);
    }
}

export default DefaultData;