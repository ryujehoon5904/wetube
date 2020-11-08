
// globalRouter.js

export const home = (req, res) => res.render("home", { pageTitle: "Home"});
// 함수의 인자를 (req, res) 라고 하는거 일뿐이고, 이름은 중요하지 않다. 다만 기능상 req는 요청부분이고, res는 그 요청에 대한 응답부분이다. next는 그 처리의 중간값 

export const search = (req, res) => {
    //console.log(req.query.term);     -> term에가 검색값을 담았고, , const serchingBy = req.query.term; 요청한 값중에서 key 가 term 인것의 value 찾기. 
    const {
        query: {term : searchingBy}    
    } = req;
    // = const searchingBy = req.query.term;
    res.render("search", { pageTitle: "Search", searchingBy });
}; 
//  =   res.render("search", { pageTitle: "Search", searchingBy: searchingBy});


export const videos = (req, res) => res.render("videos", { pageTitle: "Videos"});

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetal"});
export const editVideo = (req, res) => res.render("editVideo",{ pageTitle: "EditVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo"});


/* express 의 req, res 객체
req.query : 쿼리스트링에 대한 정보가 담긴 객체
req.get(헤더이름) : 헤더의 값을 가져오고 싶을때 사용하는 메서드 

res.render(view, data) : template enginge을 렌더링해서 응답할때 사용하는 메서드
render 함수의 첫번째 인자는 템플릿이고, 두번째 인자는 템플릿에서 추가할 정보가 담긴 객체이다. 


res.send(data) : 데이터와 함께 응답을 보낸다. 데이터는 문자열일 수도 있고 html 일수도있으며, 버퍼일수도있고 객체나 배열일수도있음
*/