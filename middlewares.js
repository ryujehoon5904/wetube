import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next();
}

/* next(); 이 middleware 가 app.js 상에서 코드들 사이에 존재하기 때문에 return 으로 종료되는게 아니라
다음 함수로 넘어가라는 의미에서 next() 를 넣어줘야함
*/