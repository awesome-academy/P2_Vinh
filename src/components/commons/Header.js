import React, { useEffect, useState } from 'react';

import CommonNavbar from './CommonNavbar';
import Navbar from './Navbar';
import { fetchData } from '../../mixins/fetchData';

export default function Header() {
  const [ highlightNamePro, setPighlightNamePro ] = useState(Array);

  useEffect(() => {
    const highlightProduct = async () => {
      const res = await fetchData('products');

      res.sort((x, y) => {
        const k = x.rating;
        const l = y.rating;
        return l - k;
      });

      if (res.length > 0) {
        const textSplit = res[0].title.split(" ");

        setPighlightNamePro(textSplit);
      }
    };

    highlightProduct();

  }, []);

  if (highlightNamePro.length === 0) {
    return null;
  }

  return (
    <>
      <header className="header">
        <CommonNavbar />
        <header className="header" style={{backgroundImage: "url(../images/slide-1-2050x898.jpg)"}}>
          <div className="header__title">{highlightNamePro[0]}</div>
          <div className="header__title-n">{`${highlightNamePro[1]} ${highlightNamePro[2]} ${highlightNamePro[3]}`}</div>
          <div className="header__title-nn">Since {highlightNamePro[highlightNamePro.length - 1]}</div>
        </header>
      </header>
      <Navbar />
    </>
  )
}
