import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../.././actions/user.action";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../mixins/fetchData";

export default function CommonNavbar() {
  const { t, i18n } = useTranslation();
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const checkUserLogin = JSON.parse(sessionStorage.getItem("users"));

  useEffect(() => {
    if (checkUserLogin) {
      const res = fetchData("users", { id: checkUserLogin.id });
      const { id, email } = res;

      dispatch(setUserLogin({ id, email }));
    }
  }, [dispatch]);

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
            <Link to="">{t("My account")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Order status")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Favorites list")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          <li className="navbar-top__main-navbar__narvar__items">
            <Link to="">{t("Cart")}</Link>
          </li>
          <li className="navbar-top__main-navbar__narvar__items">-</li>
          {appState.users.data ? (
            <li className="navbar-top__main-navbar__narvar__items">
              <a href="#0" onClick={handleLogout}>
                {t("Logout")}
              </a>
            </li>
          ) : (
            <>
              <li className="navbar-top__main-navbar__narvar__items">
                <Link to="/login">{t("Login")}</Link>
              </li>
              <li className="navbar-top__main-navbar__narvar__items">-</li>
              <li className="navbar-top__main-navbar__narvar__items">
                <Link to="/register">{t("Register")}</Link>
              </li>
            </>
          )}
          <li
            onClick={() => handleChangeLanguage("en")}
            className="navbar-top__main-navbar__narvar__items cursor"
          >
            <img
              src="http://localhost:3000/images/flags/en.png"
              width="20px"
              height="10px"
              alt="flag-en"
            />
          </li>
          <li
            onClick={() => handleChangeLanguage("vi")}
            className="navbar-top__main-navbar__narvar__items cursor"
          >
            <img
              src="http://localhost:3000/images/flags/vi.png"
              width="20px"
              height="10px"
              alt="flag-vi"
            />
          </li>
        </ul>
        <div className="navbar-top__search">
          <span>
            |
            <input type="text" placeholder={t("Search")} />
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </nav>
  );
}
