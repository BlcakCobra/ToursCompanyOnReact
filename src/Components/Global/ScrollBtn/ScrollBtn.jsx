
import React from 'react';
import { useTranslation } from 'react-i18next';
export default function ScrollBtn(props) {
const {t} =useTranslation()
  return (
    <button className="scrollBtn" onClick={props.handleScroll}>
      {t("Header.More")}
    </button>
  );
}