import React, { Component } from "react";
import BrandLogo from "../../assets/img/bangraeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Timeline extends Component {
  state = {};
  render() {
    return (
      <>
        <section class="con">
          <a class="navbar-brand col" href="#">
            <img
              class="brandLogo"
              width="100%"
              src={BrandLogo}
              alt="brandLogo"
            />
          </a>
          {/* 검색 바  */}
          <div className="search d-flex justify-content-center">
            <div className="search-box d-flex">
              <FontAwesomeIcon icon={faSearch} className="search" />
              <input
                class="form-control me-2"
                type="search"
                placeholder="검색어를 입력해주세요. "
                aria-label="Search"
              />
              <button className="search-btn">SEARCH</button>
            </div>
          </div>
        </section>
        <br />
      </>
    );
  }
}

export default Timeline;
