export const home = (req, res) => res.render("home", { pageTitle: "Home"});

export const search = (req, res) => {
    const {
        qeury: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos"});

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetal"});
export const editVideo = (req, res) => res.render("editVideo",{ pageTitle: "EditVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo"});


/* express 의 req, res 객체
req.query : 쿼리스트링에 대한 정보가 담긴 객체
req.get(헤더이름) : 헤더의 값을 가져오고 싶을때 사용하는 메서드 

res.render(view, data) : template enginge을 렌더링해서 응답할때 사용하는 메서드
res.send(data) : 데이터와 함께 응답을 보낸다. 데이터는 문자열일 수도 있고 html 일수도있으며, 버퍼일수도있고 객체나 배열일수도있음
*/