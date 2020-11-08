

//url 접속경로의 집합. 

// Global 
const HOME = "/";
const JOIN = "/join"; // 회원가입
const LOGIN = "/login"; // 로그인
const LOGOUT = "/logout"; // 로그아웃
const SEARCH = "/search"; //검색

// Users (USER 만을 위한)
const USERS = "/users";
const USER_DETAIL = "/:id";
// /:id 의 경우 express가 값이 변화는 거(:)라는 인지하게 된다. /id 는 단순히 text로 인식
const EDIT_PROFILE = "/edit-pfofile";
const CHANGE_PASSWORD = "/change-password";

// Videos (VIDEOS ROUTER)
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO ="/:id/delete";

// object
const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEOS_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;
