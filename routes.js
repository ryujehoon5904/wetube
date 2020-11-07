
// Global 
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

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
    user: USERS,
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
