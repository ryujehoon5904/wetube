import express from "express";

const videoRouter = express.Router();

// 하나의 값만 export하려면 export const videoRouter =   ... 하면 됨 다른 파일에서 호출할때, import { videoRoouter } from "..."

export default videoRouter;
