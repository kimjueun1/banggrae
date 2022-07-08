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
class Info extends Component {
  state = {};
  render() {
    return (
      <>
        <section class="container sec1">
          <h3 class="sec_tit">행복한 빙그레의 맛!</h3>
          <div class="row">
            <ul class="col">
              {/* <li> */}
              <img class="icecream" src={icecream} alt="icecream" />
              <h>아이스크림</h>
              {/* </li> */}
            </ul>
            {/* </div>{" "} */}
            <ul class="col">
              {/* <li> */}
              <img class="milk" src={milk} alt="milk" />
              <h>우유/치즈</h>
              {/* </li> */}
            </ul>{" "}
            <ul class="col">
              {/* <li> */}
              <img class="yogurt" src={yogurt} alt="yogurt" />
              <h>발효유</h>
              {/* </li> */}
            </ul>{" "}
            <ul class="col">
              {/* <li> */}
              <img class="coffee" src={coffee} alt="coffee" />
              <h>커피</h>
              {/* </li> */}
            </ul>{" "}
            <ul class="col">
              {/* <li> */}
              <img class="beverage" src={beverage} alt="beverage" />
              <h>음료</h>
              {/* </li> */}
            </ul>{" "}
            {/* <ul class="col">
            <img class="juice" src={juice} alt="juice" />
            <h>주스</h>
          </ul> */}
          </div>
        </section>
        <section class="container sec1">
          <h3 class="sec_tit">BRAND SHOP</h3>
          <div class="row ">
            {/* <div class="col p-3"> */}
            <ul class="col logo_box p-5 m-3">
              <img class="sec02_logo01" src={sec02_logo01} alt="sec02_logo01" />
            </ul>
            <ul class="col logo_box p-5 m-3">
              <img class="sec02_logo02" src={sec02_logo02} alt="sec02_logo02" />
            </ul>
            <ul class="col logo_box p-5 m-3">
              <img class="sec02_logo03" src={sec02_logo03} alt="sec02_logo03" />
            </ul>
            <ul class="col logo_box p-5 m-3">
              <img class="sec02_logo04" src={sec02_logo04} alt="sec02_logo04" />
            </ul>
            <ul class="col logo_box p-5 m-3">
              <img class="sec02_logo05" src={sec02_logo05} alt="sec02_logo05" />
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Info;
