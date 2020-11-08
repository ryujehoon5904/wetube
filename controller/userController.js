// 대게 프로젝트에 있는 각 모델마다 컨트롤러를 만듬 . 


export const join = (req, res) => res.render("join", { pageTitle: "Join"});
export const login = (req, res) => res.render("login", { pageTitle: "Login"});
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout"});
//export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile"});
export const changePassword = (req, res) => res.render("ChangePassword", { pageTitle: "ChangePassword"});


// arrow fuction 