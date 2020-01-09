import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { setMessage } from "../../../actions/message.action";
import { checkValidateRegisterForm } from "../../../mixins/checkValidateForm";
import { closeMessage } from "../../closeMessage";
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

export default function Register() {
  const { t, i18n } = useTranslation();
  const [users, setUsers] = useState({});
  const [firstNameErr, setFirstNameErr] = useState(Boolean);
  const [lastNameErr, setLastNameErr] = useState(Boolean);
  const [emailErr, setEmailErr] = useState(Boolean);
  const [passwordErr, setPasswordErr] = useState(Boolean);
  const [passwordAgainErr, setPasswordAgainErr] = useState(Boolean);
  const dispatch = useDispatch();
  // const appState = useSelector(state => state);
  const bd = "1px solid red";

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;

    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      // validate
      const msg = setMessage(
        checkValidateRegisterForm(
          users,
          setFirstNameErr,
          setLastNameErr,
          setEmailErr,
          setPasswordErr,
          setPasswordAgainErr
        )
      );

      dispatch(msg);

      let isMessage = Boolean;

      if (msg.payload === "Mật khẩu không trùng khớp") {
        isMessage = false;
      } else if (msg.payload === "Đăng ký thành công") {
        isMessage = true;

        const usersData = {
          id: 2,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          password: users.password,
          role: 0
        };

        // add user
        db.get("users")
          .push(usersData)
          .write();
      } else {
        return;
      }

      dispatch(closeMessage(isMessage));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="main-signin">
      <div className="signin container">
        <div className="breadcrumb">
          <span>Trang chủ</span>
          <span> / </span>
          <span>Đăng ký</span>
        </div>
        <div className="signin__sn">
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">{t("Đăng ký").toUpperCase()}</h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="./images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="signin__node-sn">
            <Link to="/login">{t("Đăng nhập").toUpperCase()}</Link>
          </div>
        </div>
        <div className="signin__box-su">
          <div className="signin__box-sn">
            <div className="signin__title">{t("Thông tin cá nhân").toUpperCase()}</div>
            <div className="signin__ip-sn">
              <form onSubmit={handleSubmit}>
                <div style={{ border: firstNameErr ? bd : "" }}>
                  <input
                    type="text"
                    name="firstName"
                    value={users.firstName || ""}
                    onChange={handleChange}
                    placeholder={t("Họ")}
                  />
                </div>
                <div style={{ border: lastNameErr ? bd : "" }}>
                  <input
                    type="text"
                    name="lastName"
                    value={users.lastName || ""}
                    onChange={handleChange}
                    placeholder={t("Tên")}
                  />
                </div>
                <div style={{ border: emailErr ? bd : "" }}>
                  <input
                    type="text"
                    name="email"
                    value={users.email || ""}
                    onChange={handleChange}
                    placeholder="Email..."
                  />
                </div>
                <div style={{ border: passwordErr ? bd : "" }}>
                  <input
                    type="password"
                    name="password"
                    value={users.password || ""}
                    onChange={handleChange}
                    placeholder={t("Mật khẩu")}
                  />
                </div>
                <div style={{ border: passwordAgainErr ? bd : "" }}>
                  <input
                    type="password"
                    name="passwordAgain"
                    value={users.passwordAgain || ""}
                    onChange={handleChange}
                    placeholder={t("Nhập lại mật khẩu")}
                  />
                </div>
                <button className="signin__sm-sn">{t("Đăng ký").toUpperCase()}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
