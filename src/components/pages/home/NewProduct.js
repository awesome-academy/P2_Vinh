import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urlPretty } from '../../../mixins/urlPretty';

export default function NewProduct({ products }) {
  const { t } = useTranslation();
  const newProducts = [...products];

  newProducts.sort((x, y) => {
    const k = new Date(x.createDate);
    const l = new Date(y.createDate);
    return l - k;
  });

  return (
    <section className="new-product">
      <div className="product container">
        <div className="main-title-tl">
          <div className="main-title-tl__tt">
            {t("New product").toUpperCase()}
          </div>
          <div className="main-title-tl__eff">
            <img src="./images/title-dark.png" alt="" />
          </div>
        </div>
        <div className="product__pro">
          <div className="product__box-pro1">
            {newProducts.map((item, index) => (
              <div key={index} className="product__items">
                <div className="product__photo">
                  <img src={`./images/${item.images[0]}`} alt="" />
                </div>
                <div className="product__title">
                  <Link to={`${urlPretty(item.title)}/${item.id}`}>{item.title}</Link>
                </div>
                <div className="product__price">
                  <span className="product__price-sale">{item.price}</span>
                  <span> - </span>
                  <span className="product__price-not-sale">
                    <strike>650.000</strike>
                  </span>
                </div>
                <button className="product__add-to-cart">
                  {t("Add to cart").toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
