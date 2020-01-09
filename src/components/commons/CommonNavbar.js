import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../.././actions/user.action";
import { useTranslation, Trans } from "react-i18next";

export default function CommonNavbar() {
  const { t, i18n } = useTranslation();
  const appState = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(setUserLogin(null));

    sessionStorage.removeItem("users");
  };

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar-top">
      <div className="navbar-top__main-navbar container">
        <ul className="navbar-top__main-navbar__narvar">
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Tài khoản của tôi")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Trạng thái đơn hàng")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Danh sách ưu thích")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Giỏ hàng")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          {appState.users.data ? (
            <li className="navbar-top__main-navbar__narvar__items">
              <a href="#0" onClick={handleLogout}>
                {t("Đăng xuất")}
              </a>
            </li>
          ) : (
            <>
              <li className="navbar-top__main-navbar__narvar__items">
                <Link to="/login">{t("Đăng nhập")}</Link>
              </li>
              <li className="navbar-top__main-navbar__narvar__items">-</li>
              <li className="navbar-top__main-navbar__narvar__items">
                <Link to="/register">{t("Đăng ký")}</Link>
              </li>
            </>
          )}
          <li onClick={() => handleChangeLanguage("en")} className="navbar-top__main-navbar__narvar__items cursor">En</li>
          <li onClick={() => handleChangeLanguage("vi")} className="navbar-top__main-navbar__narvar__items cursor">Vi</li>
        </ul>
        <div className="navbar-top__search">
          <span>
            |
            <input type="text" placeholder={t("Tìm kiếm")} />
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </nav>
  );
}
