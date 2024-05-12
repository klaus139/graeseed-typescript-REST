import { Response } from "express";
import userModel from "../models/user.model"



//get user by id
export const getUserById = async(id:string, res:Response) => {
    const userJson:any = await userModel.findById(id);

    if(userJson){
        const user = JSON.parse(userJson);
        res.status(201).json({
            success: true,
            user,
        })
    }
   
}

export const getAllUsersService = async(res:Response) => {
    const users = await userModel.find().sort({createdAt: -1});
    res.status(200).json({
        success:true,
        users
    })
}

export const updateUserRoleService = async(res:Response, email:string, role:string) => {
    const user = await userModel.findOneAndUpdate(
        { email }, 
        { role }, 
        { new: true } 
      );

    res.status(201).json({
        success:true,
        user
    })
}