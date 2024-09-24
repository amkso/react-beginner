import { useState, useEffect } from "react";
import { TopMenu } from "./components/TopMenu";
import "./css/style.css";

function CloneCoupangplay(){
  const categories = [
    "코미디", "어드벤쳐", "범죄", "한국TV 프로그램", "SF", "가족", "무협", 
    "외국 TV 프로그램", "외국 영화", "미스터리", "공포", "로맨스", "키즈", 
    "다큐멘터리", "판타지", "한국 영화", "스릴러", "영문 자막", "드라마", 
    "액션", "애니메이션", "오컬트"
  ]
  const lastList = [
    "https://img.coupangstreaming.com/titles/6b5c9a06-cf4e-493f-82b3-f8a25176a3a9/background/1704733711932-Disney_Body-of-Proof_Horizontal-Poster2_svod.jpg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/8c69b9e6-8ce8-4c3c-8006-fd7e6b79bfa6/background/54044523-a6e8-4646-9e02-5efe60d263a7.jpeg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/8bab7650-11f4-4b61-b7bc-6e0a2ac82a99/background/1702544675341-CBS_FBI-S5_HPoster2_Svod.jpg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/76892624-a9d4-4e6f-93a7-9457ae07443b/background/5cb35ac3-f704-4fb2-9135-69938f192f8c.jpg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/a3c5d8f9-b1c8-4bae-b9b3-766b7dd5a172/background/740c56ce-639a-47b6-80aa-2a586e898c3a.jpeg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/a740999b-c430-46b7-a148-cc8065ecd4ca/background/d9328468-8a0c-4f1d-b304-f515fe6260c6.jpeg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/cbbc2dcd-0e12-4d59-8afe-325e56bcc2b7/background/df829d9b-0c73-41ad-b8f1-c520f04f4bda.jpg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/70698021-a40f-4324-a62c-48d03087b71a/background/0c18f43a-addf-4cdd-965a-b4297e7926a1.jpeg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/06c64615-5147-419e-96b9-a4105500ac93/background/3b077638-11b6-459a-b9ab-56b7a200aaef.jpg?imwidth=350&imscalingMode=aspectFit",
    "https://img.coupangstreaming.com/titles/4b1cc10f-365d-4497-8338-58bc75ae5851/background/bda0aae0-74e5-435a-b756-fe379b685a5f.jpg?imwidth=350&imscalingMode=aspectFit"
  ]
  
  const setScrollLeft = (params) => {
    document.querySelector(params.name).scrollBy({left: params.value, behavior: "smooth",});
  }

  const categoryList = document.querySelector(".categoryContainer-list");
  const top20List = document.querySelector(".weekTop20-list");
  const lastContentList = document.querySelector(".lastContent-list");

  const [isHoverNum, setIsHoverNum] = useState(0);
  const [isHoverBtn, setIsHoverBtn] = useState(0);

  const [loading, setLoading] = useState(false);
  const [moviesLikes, setMoviesLikes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const json = await(
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=like_count`
        )
      ).json();

      setMoviesLikes(json.data.movies);
    }
    
    fetchData();
    setLoading(true);
  }, []);

  return (
    <div id="coupangplay">
      <TopMenu />
      <div className="bodyContentsContainer">
        <div className="categoryContainer contentPadding">
          <div><h1>카테고리</h1></div>
          <div onMouseOver={() => setIsHoverNum(1)}
              onMouseOut={() => setIsHoverNum(0)} 
            className="categoryContainer-list"
          >
            {categories.map((category)=>(<div className="contentCategory-item" key={category}>{category}</div>))}
          </div>
          {(isHoverNum === 1 || isHoverBtn === 1)? (
            <>
              {(0 < categoryList.scrollLeft) ?
                <div 
                  onMouseOver={() => setIsHoverBtn(1)} 
                  onMouseOut={() => setIsHoverBtn(0)} 
                  className="arrowButton-left" 
                >
                  <button onClick={() => setScrollLeft({name:".categoryContainer-list", value:-300})}>{'<-'}</button>
                </div>
              :null}
              {(categoryList.scrollLeft < categoryList.scrollWidth - categoryList.offsetWidth) ?
                <div 
                  onMouseOver={() => setIsHoverBtn(1)} 
                  onMouseOut={() => setIsHoverBtn(0)} 
                  className="arrowButton-right" 
                >
                  <button onClick={() => setScrollLeft({name:".categoryContainer-list", value:300})}>{'->'}</button>
              </div>
              :null}
            </>
          ):null}
        </div>

        <div className="watchingContent contentPadding">
          <div><h1>시청 중인 콘텐츠</h1></div>
          <div className="watchingContent-list">
            <div className="watchingContent-item">
              <div className="watchingContent-Thumbnail">
                <img className="thumbnail-img" src="https://img.coupangstreaming.com/titles/5a6d5d82-9859-4042-b2e4-889650c760b3/story-art/dbb46bcc-13d0-4437-8e96-6814c293deaa.jpg?imwidth=350&amp;imscalingMode=aspectFit" alt="..." />
              </div>
              <div className="watchingContent-title">
                <p>월드 워 Z</p>
              </div>
            </div>
            <div className="watchingContent-item">
              <div className="watchingContent-Thumbnail">
                <img className="thumbnail-img" src="https://img.coupangstreaming.com/titles/e34c8766-befa-46fa-9568-1f8c5d9b71cb/story-art/story-art-8b36501e-1e26-4d43-9f75-b56a12adb179.jpg?imwidth=350&imscalingMode=aspectFit" alt="..." />
              </div>
              <div className="watchingContent-title">
                <p>SNL 코리아</p>
              </div>
            </div>
          </div>
        </div>

        <div className="weekTop20Container contentPadding">
          <div><h1>해외 인기작 TOP 20</h1></div>
          <div 
            onMouseEnter={() => setIsHoverNum(2)} 
            onMouseLeave={() => setIsHoverNum(0)}
            className="weekTop20-list">
            { loading ? (
              moviesLikes.map((movie, index) => (
                <div className="weekTop20-item" key={movie.id}>
                  <div className="weekTop20-number">
                    <p draggable="false">{index+1}</p>
                  </div>
                  <div className="weekTop20-thumbnail">
                    <img src={movie.medium_cover_image} alt="..." />
                  </div>
                </div>
              ))
              ) : null}
          </div>
          {(isHoverNum === 2 || isHoverBtn === 2)? (
            <>
              { (0 < top20List.scrollLeft) ? (
                <div 
                  className="arrowButton-left" 
                  onMouseEnter={() => setIsHoverBtn(2)} 
                  onMouseLeave={() => setIsHoverBtn(0)} 
                >
                  <button onClick={() => setScrollLeft({name:".weekTop20-list", value:-600})}>{'<-'}</button>
                </div>
              ):null}
              { (top20List.scrollLeft < top20List.scrollWidth - top20List.offsetWidth) ? (
                <div 
                  className="arrowButton-right" 
                  onMouseEnter={() => setIsHoverBtn(2)} 
                  onMouseLeave={() => setIsHoverBtn(0)} 
                >
                  <button onClick={() => setScrollLeft({name:".weekTop20-list", value:600})}>{'->'}</button>
                </div>
              ):null}
            </>
            ):null}
        </div>

        <div className="lastContainer contentPadding">
          <div><h1>범인을 찾아서 {">"}</h1></div>
          {(
            <div 
              onMouseEnter={() => setIsHoverNum(3)} 
              onMouseLeave={() => setIsHoverNum(0)}
              className="lastContent-list">
              {lastList.map((item, index) =>(
                <div className="lastContent-item" key={index}>
                  <div className="lastContent-Thumbnail">
                    <img className="thumbnail-img" src={item} alt="..." />
                  </div>
                </div>))
              }
            </div>
          )
          }
          {(isHoverNum === 3 || isHoverBtn === 3)? (
            <>
              { (0 < lastContentList.scrollLeft) ? (
                <div 
                  className="arrowButton-left" 
                  onMouseEnter={() => setIsHoverBtn(3)} 
                  onMouseLeave={() => setIsHoverBtn(0)} 
                >
                  <button onClick={() => setScrollLeft({name:".lastContent-list", value:-600})}>{'<-'}</button>
                </div>
              ):null}
              { (lastContentList.scrollLeft < lastContentList.scrollWidth - lastContentList.offsetWidth) ? (
                <div 
                  className="arrowButton-right" 
                  onMouseEnter={() => setIsHoverBtn(3)} 
                  onMouseLeave={() => setIsHoverBtn(0)} 
                >
                  <button onClick={() => setScrollLeft({name:".lastContent-list", value:600})}>{'->'}</button>
                </div>
              ):null}
            </>
          ):null}
        </div>
      </div>
    </div>
  );
}


export default CloneCoupangplay;