
// homt, join, login, search 

import express from "express";
import { 
    getjoin,
    login,
    logout,
    postjoin 
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import routes from "../routes";

const globalRouter = express.Router();
//express.Router(); = url? 

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);



globalRouter.get(routes.home, home);
// controller 폴더안에 있는 videocontrller.js 에서 export const home = (req, res) => res.render("home", { pageTitle: "Home"}); 값을 가져옴. (home)  - (routes.home은 home url이고, 이 값이 요청이 들어왔으면, 반환, response를 home 을 해주는거~ )

globalRouter.get(routes.search, search);


globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;
