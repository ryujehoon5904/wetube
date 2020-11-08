import routes from "./routes";

// 요청경로 이름, 인증된 사용자, 사용자 설정 등과 같은 요청 수준 정보를 노출하는데 유영
// 사용자정보는 local 객체인데 이를 전역에서 사용할수있게, 로그인했으면 해당 로그인 정보가 사이트 전체에서 사용될수 있어야 하기 때문에 사용 _ 사용자 데이터 관련한 정보를 locals에 저장해서 모든 템플릿에서 사용


export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next();
}

/* next(); 이 middleware 가 app.js 상에서 코드들 사이에 존재하기 때문에 return 으로 종료되는게 아니라
다음 함수로 넘어가라는 의미에서 next() 를 넣어줘야함
*/