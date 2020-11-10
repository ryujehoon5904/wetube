// 대게 프로젝트에 있는 각 모델마다 컨트롤러를 만듬 . 

import routes from "../routes";


export const getjoin = (req, res) => {
    res.render("join", { pageTitle: "Join"});
};

export const postjoin = (req, res) => {
    //console.log(req.body);
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        // 두 패스워드가 차이가 나면 상태코드(status)를 400을 표시
        res.render("join", { pageTitle: "Join"});
    } else {
        res.redirect(routes.home);
    }
};

// get login 으로 사용자 정보를 (id, pw) 받으면, postlogin이 그에 대한 응답을 진행. 로그인화면을 표시하든, 패스워드가 틀렸다고 하거나, 정보가 없다고 하거나. 

export const getLogin = (req, res) => 
    res.render("login", { pageTitle: "Login"});


export const postLogin = (req, res) => {
    res.redirect(routes.home);
};


export const logout = (req, res) => {
    res.redirect(routes.home);
};





//export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile"});
export const changePassword = (req, res) => res.render("ChangePassword", { pageTitle: "ChangePassword"});


// arrow fuction 