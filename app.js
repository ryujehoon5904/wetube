// index.js

import express from "express";
import morgan from "morgan";
// imort morgan 대신 import looger from "morgan"; 도 상관없음
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
// express를 import했고, 여기에서 excpress를 app에 변수에 담아 실행! ; -> 즉시 실행

app.use(helmet());
// nodejs 보안강화 
app.set("view engine", "pug");

app.use(cookieParser());
// user의 로그인 정보를 가지고 있는상태? 

// (req, res, next), user가 로그인을 할때, 입력하는 정보 같이 user가 서버측에서 요청(request)하고 이에 대한 서버의 응답(response), 그리고 request와 response의 중간(middlware - next)처리 과정으로 되어있음

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// user가 보낸 form 을 서버가 가지고 있는 상태?? 
// 우리가 서버가 json으로 전송하거나,  일반적인 html form( urlencoded) 으로 전송하는지 서버에게 알려줘야 함.  use는 지정된 경로에 지정된 미들웨어 기능을 시작(mount)

app.use(morgan("dev"));
// morgan의 여러 인자(옵션?), combined
app.use(localsMiddleware);
// app.js에서 순차적으로코드가 실행되고, routes로 가기전에 사용자 정보등이 담긴 이 localsMiddleware가 실행되기 때문에 return으로 마무리되지 않고, next()해서 다음으로 넣어가줘야 함. (middleware.js참고)

app.use(routes.home, globalRouter);
//app.use("/", globalRouter); /  home, join, search, 등등
app.use(routes.users, userRouter);
//app.use("/users", userRouter);
app.use(routes.videos, videoRouter);

//app.use("/videos", videoRouter);
// use의 의미는 누군가 /user로 경로에 접속하면 userRouter 전체를 사용하겠다는 것을 의미
// 그럼 get은 ? userROutert 안에 더 많은 rounte가 들어가 있는데 get 은 이걸 못받아주나?
// http://expressjs.com/en/4x/api.html#app.get.method
// 누간가 호출하면 app objecet, app.js 전체를 넘겨준다는 것을 의미 
export default app;
// module 파일간에 code를 공유 . app object 전체를 공유~ 