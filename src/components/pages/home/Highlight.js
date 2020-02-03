import React from 'react';
import { useTranslation } from "react-i18next";

export default function Introduce({ products }) {
  const { t } = useTranslation();
  const newProducts = [...products];

  newProducts.sort((x, y) => {
    const k = x.rating;
    const l = y.rating;
    return l - k;
  });

  return (
    <section className="highlight">
      <div className="highlight__high container" style={{backgroundImage: "url(./images/wine-63931_12802-1240x829.jpg)"}}>
        <div className="highlight__high__pro">
          <div className="highlight__high__pro__photo"><img src={newProducts.length > 0 ? `./images/${newProducts[0].images[0]}` : ""} alt="" /></div>
          <div className="highlight__high__pro__info">
            <div className="main-title-tl">
              <h1 className="main-title-tl__tt">{newProducts.length > 0 ? newProducts[0].title : ""}</h1><span className="highlight__high__pro__info__title__eff"><img src="./images/titleleft-dark.png" alt="" /></span>
            </div>
            <div className="highlight__high__pro__info__price">{newProducts.length > 0 ? newProducts[0].price : ""}</div>
            <button className="highlight__high__pro__info__add-to-card">{t("Add to cart").toUpperCase()}</button>
            <div className="highlight__high__pro__info__descriptions">A beam of pure blackberry runs through this otherwise dense and focused red.A beam of pure blackberry runs through this otherwise dense and focused red.</div>
            <div className="highlight__high__pro__info__time">
              <table>
                <tbody><tr>
                    <td>334
                      <p>{t("Days").toUpperCase()}</p>
                    </td>
                    <td>26
                      <p>{t("Hours").toUpperCase()}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>60
                      <p>{t("Minutes").toUpperCase()}</p>
                    </td>
                    <td>15
                      <p>{t("Seconds").toUpperCase()}</p>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
