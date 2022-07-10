import React, { Component } from "react";
import BrandLogo from "../../assets/img/f_logo (1).png";
class footer extends Component {
  render() {
    return (
      <div class="footer p-3">
        <div class="footer_sec01">
          <div class="f_logo d-flex p-3">
            <a class="navbar-brand col" href="#">
              <img
                class="brandLogo"
                width="7%"
                src={BrandLogo}
                alt="brandLogo"
              />
            </a>
            <span class="p-3" style={{ color: "#adadad", fontSize: "14px" }}>
              <p>개인정보처리방침 &nbsp; &nbsp; &nbsp;오시는길</p>
            </span>
          </div>
        </div>
        <div class="footer_sec02 px-3 pb-5">
          <p class="" style={{ color: "#adadad", fontSize: "16px" }}>
            회사명 : 빙그레 <br></br>본사 : 경기도 남양주시 다산동 4344-3 /
            경기도 남양주시 다산순환로 45(다산동)
          </p>
        </div>
        <div class="footer_sec03 px-3">
          <p style={{ color: "#adadad", fontSize: "14px" }}>
            ⓒ Kimjueun all rights reserved. 본 사이트는 교육목적으로
            제작되었습니다.
          </p>
        </div>
      </div>
    );
  }
}

export default footer;
