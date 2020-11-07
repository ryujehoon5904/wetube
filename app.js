import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

// import 하려는 파일 전체를 가져오려면 import router from "./router"; 하면 되겠지만 변수나 함수만을 가져오는 거라서 저렇게 함 (그냥 형식)
// default 로  export 한게 아니기 때문에 
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleware);


app.use(routes.home, globalRouter);
//app.use("/", globalRouter); /  home, join, search, 등등
app.use(routes.user, userRouter);
//app.use("/user", userRouter);
app.use(routes.videos, videoRouter);

//app.use("/videos", videoRouter);
// use의 의미는 누군가 /user로 경로에 접속하면 userRouter 전체를 사용하겠다는 것을 의미
// 그럼 get은 ? userROutert 안에 더 많은 rounte가 들어가 있는데 get 은 이걸 못받아주나?

// 누간가 호출하면 app objecet, app.js 전체를 넘겨준다는 것을 의미 
export default app;
