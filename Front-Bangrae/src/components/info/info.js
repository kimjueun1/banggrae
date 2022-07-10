import React, { Component } from "react";
import icecream from "../../assets/img/sec02_img01.png";
import milk from "../../assets/img/sec02_img02.png";
import yogurt from "../../assets/img/sec02_img03.png";
import coffee from "../../assets/img/sec02_img04.png";
import beverage from "../../assets/img/sec02_img05.png";
import juice from "../../assets/img/sec02_img06.png";
import sec02_logo01 from "../../assets/img/sec02_logo01.png";
import sec02_logo02 from "../../assets/img/sec02_logo02.png";
import sec02_logo03 from "../../assets/img/sec02_logo03.png";
import sec02_logo04 from "../../assets/img/sec02_logo04.png";
import sec02_logo05 from "../../assets/img/sec02_logo05.png";
import sec04_bg03 from "../../assets/img/sec04_backimg03.png";
import sec04_bg04 from "../../assets/img/sec04_backimg04.png";
class Info extends Component {
  state = {};
  render() {
    return (
      <>
        <section class="sec1 mt-3">
          <h3 class="sec_tit">행복한 빙그레의 맛!</h3>
          <div class="row ">
            <ul class="sec02_li01 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="icecream" src={icecream} alt="icecream" />
              <h class="sec2_items">아이스크림</h>
            </ul>
            <ul class="sec02_li02 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="milk" src={milk} alt="milk" />
              <h class="sec2_items">우유/치즈</h>
            </ul>{" "}
            <ul class="sec02_li03 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="yogurt" src={yogurt} alt="yogurt" />
              <h class="sec2_items">발효유</h>
            </ul>{" "}
            <ul class="sec02_li04 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="coffee" src={coffee} alt="coffee" />
              <h class="sec2_items">커피</h>
            </ul>{" "}
            <ul class="sec02_li05 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="beverage" src={beverage} alt="beverage" />
              <h class="sec2_items">음료</h>
            </ul>{" "}
            <ul class="sec02_li06 sec1-item col d-flex align-items-center flex-wrap justify-content-center">
              <img class="juice" src={juice} alt="juice" />
              <h class="sec2_items">주스</h>
            </ul>
          </div>
        </section>
        <div class="sec1">
          <h3 class="sec_tit">BRAND SHOP</h3>
          <div class="row ">
            {/* <div class="col p-3"> */}
            <ul class="col logo_box p-5 m-3 d-flex align-items-center justify-content-center">
              <img class="sec02_logo01" src={sec02_logo01} alt="sec02_logo01" />
            </ul>
            <ul class="col logo_box p-5 m-3 d-flex align-items-center justify-content-center">
              <img class="sec02_logo02" src={sec02_logo02} alt="sec02_logo02" />
            </ul>
            <ul class="col logo_box p-5 m-3 d-flex align-items-center justify-content-center">
              <img class="sec02_logo03" src={sec02_logo03} alt="sec02_logo03" />
            </ul>
            <ul class="col logo_box p-5 m-3 d-flex align-items-center justify-content-center">
              <img class="sec02_logo04" src={sec02_logo04} alt="sec02_logo04" />
            </ul>
            <ul class="col logo_box p-5 m-3 d-flex align-items-center justify-content-center">
              <img class="sec02_logo05" src={sec02_logo05} alt="sec02_logo05" />
            </ul>
          </div>
        </div>
        <section class="sec2">
          <div class="cyber_box1 m-3">
            <div class="sec2_tit pb-3">
              <h4>사이버신고</h4>
              <h class="sec2_p">
                빙그레 임직원의 부당한 요구 또는 <br></br>
                업무 처리, 기타 부정행위 제보
              </h>
            </div>
            <button className="sec2-search-btn">제보하기</button>
          </div>
          <div class="cyber_box2 m-3">
            <div class="sec2_tit pb-3">
              <h4>안전신문고</h4>
              <h class="sec2_p">
                빙그레 임직원의 부당한 요구 또는 <br></br>
                업무 처리, 기타 부정행위 제보
              </h>
            </div>
            <button className="sec2-search-btn">제보하기</button>
          </div>
        </section>{" "}
        {/* <div class="justify-content-center"> */}
        <div class="d-flex justify-content-center mt-5 mb-5">
          <div class="qnas">
            <div class="sec2_tit p-4 ">
              <div class="q-sec d-flex mb-3 pt-3">
                <h4 class="">자주 묻는 질문</h4>
                <button className="sec2-more-btn">더보기</button>
              </div>
              <ui class="qna_list">
                {/* <li> */}
                <p className="sec2-pnas-list">
                  {" "}
                  Q. 아이스크림에는 왜 유통기한이 없나요?
                </p>
                {/* </li> */}
                {/* <li> */}
                <p className="sec2-pnas-list">
                  {" "}
                  Q. 구매일이 불분명하고 영수증이 없지만 제품의 유통기한이
                  지났습니다.{" "}
                </p>
                {/* </li> */}
                {/* <li> */}
                <p className="sec2-pnas-list">
                  Q. 유통기한 뒤에 있는 알파벳 기호는 무엇인가요?
                </p>
                {/* </li> */}
                {/* <li> */}
                <p className="sec2-pnas-list">
                  Q. 빙그레는 HACCP 인증을 모두 받았나요?
                </p>
                {/* </li> */}
                {/* <li> */}
                <p className="sec2-pnas-list">
                  Q. 바나나맛우유 유통기한을 어떻게 읽나요?{" "}
                </p>
                {/* </li> */}
                {/* <li> */}
                <p className="sec2-pnas-list">
                  Q. 빙그레 서체의 사용 범위를 알고싶어요.
                </p>
                {/* </li> */}
              </ui>
              <div class="d-flex justify-content-between mt-3">
                <div class="email_box">
                  <div class="sec2_tit pb-3">
                    <h4>이메일 상담</h4>
                    <h class="sec2_p">
                      빙그레에 궁금한 사항을 문의해 주세요.
                      <br></br>최대한 빠른 시일내에 친절하게 답변해드리겠습니다.
                    </h>
                  </div>
                  <button className="sec2-search-btn">상담하기</button>
                </div>
                <div class="call_box">
                  <div class="sec2_tit pb-3">
                    <h4>전화 상담</h4>
                    <h2>080.022.0056</h2>
                    <h class="sec2_p">
                      월~금(공휴일 제외)
                      <span style={{ color: "red" }}> 09:00~17:30</span>
                    </h>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Info;
