import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { show } from "../modals/basket/basketSlice";
import { showModal } from "../modals/modal-window/modalSlice";
import { Link } from "react-router-dom";

import "./header.sass";

const Header = () => {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);

  opened
    ? (document.body.className = "hidden")
    : (document.body.className = "");

  const closeBurger = (e) => {
    if (e.target.tagName !== "UL") {
      setOpened(false);
    }
  };

  const toggleBurger = (e) => {
    if (e.target.tagName !== "UL") {
      setOpened((prevState) => !prevState);
    }
  };

  const openBasket = () => {
    dispatch(show());
  };
  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <header className="Header">
      <div className={opened ? "wrapper wrapper-active" : "wrapper"}>
        <div className="logo">
          <a href="/">ВЕСТА</a>
        </div>
        <div className="menu">
          <nav onClick={closeBurger}>
            <ul className="main-ul">
              <li>
                <Link to="/">ГЛАВНАЯ</Link>
              </li>
              <li className="have-navigation">
                <p>КАТАЛОГ</p>
                <ul className="drop-down">
                  <li>
                    <Link to="/">ЖЕНСКИЙ ОТДЕЛ</Link>
                  </li>
                  <li>
                    <Link to="/">МУЖСКОЙ ОТДЕЛ</Link>
                  </li>
                  <li>
                    <Link to="/">АКСЕССУАРЫ</Link>
                  </li>
                  <li>
                    <Link to="/">РАСПРОДАЖА</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="about">О НАС</Link>
              </li>
              <li>
                <Link to="contacts">КОНТАКТЫ</Link>
              </li>
              <li>
                <Link to="FAQ">FAQ</Link>
              </li>
              <li className="icon">
                <div>
                  <img
                    onClick={openModal}
                    className="registration"
                    src="icons/registration.png"
                    alt=""
                    title=""
                  ></img>
                </div>
              </li>
              <li className="icon">
                <div>
                  <img
                    onClick={openBasket}
                    className="basket open-closed-basket"
                    src="/icons/basket.png"
                    alt=""
                    title=""
                  ></img>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={toggleBurger} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
