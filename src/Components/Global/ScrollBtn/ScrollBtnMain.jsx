import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ScrollBtnMain(props) {
  const {t} = useTranslation()
  return (
    <button className="scrollBtn second" style={{ borderRadius: "10px", backgroundImage: "linear-gradient(to right, #18a30b, #1ffe01, #3eff31, #13b01e)",marginTop:"50px",marginLeft:"125px" }} onClick={props.handleScrollMain}>
      {t("Header.More")}
    </button>
  );
}