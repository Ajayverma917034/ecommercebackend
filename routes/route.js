import express from 'express';
import { usersingup, userlogin } from '../controller/userController.js';
import { getProducts, getProductById } from '../controller/productController.js';
import { getFashion, } from '../controller/fashionController.js';
import { getLikes, getLikeById } from '../controller/likeController.js';
import { getStyles } from '../controller/styleController.js';
// import { addPaymentGateway } from '../controller/paymentController.js';
import { resetLink } from '../controller/ResetLinkController.js';


const router = express.Router();


router.post('/singup', usersingup);
router.post('/login', userlogin);
router.get('/products', getProducts);
router.get('/fashion', getFashion);
router.get('/product/:id', getProductById);
router.get('/like', getLikes)
router.get('/like/:id', getLikeById)
router.get('/style', getStyles);
router.post('/sendpasswordlink', resetLink)
// router.post('/payment', addPaymentGateway);s

// console.log(qProducts);
export default router;
