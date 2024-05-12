import express from 'express';
import {  deleteUser, getUserInfo, loginUser, logoutUser, registrationUser,  updatePassword,  updateUserInfo, updateUserRole } from '../controller/user.controller'
import { authorizeRoles, isAuthenticated } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/registration', registrationUser);

userRouter.post('/login-user', loginUser);

userRouter.get('/logout-user',  isAuthenticated, logoutUser);


userRouter.get('/me', isAuthenticated, getUserInfo);

userRouter.put('/update-user-info',isAuthenticated, updateUserInfo);

userRouter.put('/update-user-password', isAuthenticated, updatePassword);

userRouter.put('/update-user-role', isAuthenticated, authorizeRoles('admin'), updateUserRole);

userRouter.delete('/delete-user/:id', isAuthenticated, authorizeRoles('admin'), deleteUser);




export default userRouter;