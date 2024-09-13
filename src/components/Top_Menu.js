import React from "react";
import "../css/style.css";


export const Top_Menu = () => {
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
            <a className="Menu-explore_link margin-right-24px">
              <span>모든 카테고리</span>
              <i className="material-symbols-outlined margin-left-8px">arrow_drop_down</i>
            </a>
          </li>
          <li><i className="material-symbols-outlined text-white margin-right-24px">search</i></li>
          <li>
            <div className="Menu-user">
              <img src="https://tools-api.webcrumbs.org/image-placeholder/32/32/user-avatar/1" alt="User img" className="Menu-user-img" />
              <i className="material-symbols-outlined">arrow_drop_down</i>
            </div>
          </li>
        </ul>
      </div> 
    </div>
  )
}
