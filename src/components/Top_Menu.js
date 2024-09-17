import { useState } from "react";
import "../css/style.css";


export const Top_Menu = () => {
  const [isCategoryHover, setIsCategoryHover] = useState(false);
  const [isMenuExploreHover, setIsMenuExploreHover] = useState(false);
  const [isUserHover, setIsUserHover] = useState(false);
  const [isUserMenuHover, setIsUserMenuHover] = useState(false);

  const categories = ["코미디", "어드벤쳐", "범죄", "한국TV 프로그램", "SF", "가족", "무협", "외국 TV 프로그램", "외국 영화", "미스터리", "공포", "로맨스", "키즈", "다큐멘터리", "판타지", "한국 영화", "스릴러", "영문 자막", "드라마", "액션", "애니메이션", "오컬트"]
  const userMenu = ["프로필 관리", "구매내역", "할인쿠폰", "리뷰 관리", "의견 보내기", "로그아웃"]
  return (
    <div id="webcrumbs"> 
      <div className="Menu-bar">
        <a className="Menu-logo" href="/test">
          <img src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg" alt="Coupang Play" />
        </a>
        <ul className="Menu-list">
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">TV</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">영화</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">스포츠</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">스토어</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">키즈</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">뉴스</a></li>
          <li className="Menu-list-item"><a href="#" className="Menu-list-link">찜한 콘텐츠</a></li>
        </ul>
        <ul className="Menu-list Menu-right_side">
          <li>
            <a onMouseEnter={() => setIsCategoryHover(true)} 
              onMouseLeave={() => setIsCategoryHover(false)} 
              className="Menu-explore_link margin-right-24px"
            >
              <span>모든 카테고리</span>
              <i className="material-symbols-outlined margin-left-8px">arrow_drop_down</i>
            </a>
            {isCategoryHover || isMenuExploreHover ? (
              <div className="Menu-explore_container"
                onMouseEnter={() => setIsMenuExploreHover(true)} 
                onMouseLeave={() => setIsMenuExploreHover(false)} 
              >
                <div className="Menu-explore_subContainer">
                  {categories.map((category) => (
                    <div className="Menu-explore_sublink"><a>{category}</a></div>
                  ))}
                </div>
              </div>
              ) : null
            }
          </li>
          <li><i className="material-symbols-outlined text-white margin-right-24px search-img">search</i></li>
          <li>
            <div 
              onMouseEnter={() => setIsUserHover(true)} 
              onMouseLeave={() => setIsUserHover(false)}
              className="Menu-user"
            >
              <img src="https://tools-api.webcrumbs.org/image-placeholder/32/32/user-avatar/1" alt="User img" className="Menu-user-img" />
              <i className="material-symbols-outlined">arrow_drop_down</i>
            </div>
            {isUserHover || isUserMenuHover? (
              <div className="Menu-user_container"
                onMouseEnter={() => setIsUserMenuHover(true)} 
                onMouseLeave={() => setIsUserMenuHover(false)} 
              >
                <div className="Menu-user_subContainer">
                {userMenu.map((menu) => (
                  <div className="Menu-user_sublink"><a>{menu}</a></div>
              ))}</div>
              </div>
              ) : null
            }
          </li>
        </ul>
      </div> 
    </div>
  )
}
