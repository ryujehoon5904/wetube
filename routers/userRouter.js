
import express from "express";
import routes from "../routes";
import { 
    users, 
    userDetail,
    editProfile,
    changePassword 
} from "../controller/userController";

const userRouter = express.Router();
//express.Router(); = url? 

userRouter.get(routes.editProfile, editProfile);
// controller 폴더안에 있는 videocontrller.js 에서 export const home = (req, res) => res.render("home", { pageTitle: "Home"}); 값을 가져옴. (home)  - (routes.home은 home url이고, 이 값이 요청이 들어왔으면, 반환, response를 home 을 해주는거~ )
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);


export default userRouter;
