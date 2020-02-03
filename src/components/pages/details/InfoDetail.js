import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";
import RatedPoint from "./RatedPoint";

const timeNow = moment().format();
const style = {
    color: "red"
};

export default function InfoDetail({ product }) {
    const [pro, setPro] = useState(Object);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userExist = JSON.parse(sessionStorage.getItem("users"));
    const errMessage = "You need to select this section";

    if (product.length === 0) {
        return null;
    }

    const handleChange = e => {
        const target = e.target;
        const { name, value } = target;

        setPro({ ...pro, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (userExist) {
            if (pro.color && pro.size) {
                const getInfoPro = {
                    id: product.id,
                    title: product.title,
                    image: product.images[0],
                    price: product.price,
                    color: pro.color,
                    size: pro.size,
                    amount: +pro.amount || 1,
                    status: "pending",
                    userId: userExist.id,
                    createDate: moment(timeNow).format("DD-MM-YYYY HH:mm")
                };

                console.log(getInfoPro);
            } else {
                dispatch(setMessage("Bạn cần chọn đầy đủ thông tin để thêm vào giỏ"));
                dispatch(closeMessage(""));
            }
        } else {
            dispatch(setMessage("Đăng nhập để thêm vào giỏ"));
            dispatch(closeMessage(""));
        }
    };

    return (
        <div className="detail__pro-info">
      <div className="main-title-tl">
        <h1 className="main-title-tl__tt detail__eff--left">{product.title}</h1>
        <div className="main-title-tl__eff detail__eff--left"><img src="./images/titleleft-dark.png" alt="" /></div>
      </div>
      <div className="detail__pro-price highlight__high__pro__info__price">{product.price}</div>
      <div className="detail__pro-reviews">
        <RatedPoint rating={product.rating} /> {t("Rated points")}
      </div>
      <div className="detail__pro-colors">
        <div className="title1">{t("Color").toUpperCase()}</div>
        <div className="detail__pro-color-dt">
          {product.colors.map((color, index) => (
            <React.Fragment key={index}>
              <input id={color} name="color" type="radio" value={color || ""} onChange={handleChange} />
              <label htmlFor={color} className={`detail__cl-${color}`} />
            </React.Fragment>
          ))}
          <strong style={style}>{!pro.color ? t(errMessage) : null}</strong>
        </div>
      </div>
      <div className="detail__pro-size">
        <div className="title1">{t("Size")}</div>
        <div className="detail__pro-select">
          <select name="size" onChange={handleChange}>
            <option value="">Choose your size</option>
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
          <strong style={style}>{!pro.size ? t(errMessage) : null}</strong>
        </div>
      </div>
      <div className="detail__pro-amount">
        <div className="title1">{t("Amounts").toUpperCase()}</div>
        <div className="detail__amount">
          <input type="number" name="amount" onChange={handleChange} value={pro.amount || 1} />
          <button className="detail__pro-add-to-cart" onClick={handleSubmit}>{t("Add to cart").toUpperCase()}</button>
        </div>
      </div>
      <div className="detail__pro-action"><span><i className="fas fa-heart" />{t("Love")}</span><span><i className="fas fa-signal" />{t("Compare")}</span><span><i className="fas fa-envelope" />Email</span></div>
      <div className="detail__pro-descriptions">
        <div className="title1">{t("Descriptions").toUpperCase()}</div>
        <p>{product.descriptions}</p>
      </div>
      <div className="detail__pro-socials" />
    </div>
    )
}
