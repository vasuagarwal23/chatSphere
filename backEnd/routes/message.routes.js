import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../Middleware/protectRoute.js';


const router = express.Router();
router.get('/:id',protectRoute,getMessages);
router.post('/send/:id', protectRoute, sendMessage);
export default router;