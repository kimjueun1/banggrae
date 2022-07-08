import React, { Component } from "react";
import Logo from "../../assets/img/logo.png";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo" src={Logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ background: "#ea1d63", color: "white" }}
          >
            <i class="icon ion-android-menu"></i>
          </button>
          <div
            class="collapse navbar-collapse header_sec01"
            id="navbarSupportedContent"
          >
            <div class="header_sec02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    회사소개
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    제품소개
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    지속가능경영
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    투자정보
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    고객센터
                  </a>
                </li>
              </ul>
            </div>
            {/* <ul class="two-menu navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="cart nav-link position-relative" href="#">
                  Cart
                  <span class="custom-badge position-absolute translate-middle bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
