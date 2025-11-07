import e from 'express';
import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
import validateUser from '../middlewares/inputValidator.js';
const router = express.Router();

// Sample route to get all users
router.get('/user', getAllUsers);
router.get("/user/:id", getUserById);
router.post('/user', validateUser, createUser);
router.put('/user/:id', validateUser, updateUser);
router.delete('/user/:id', deleteUser);

export default router;