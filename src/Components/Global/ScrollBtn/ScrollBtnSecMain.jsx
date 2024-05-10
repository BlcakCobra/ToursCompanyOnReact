import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ScrollBtnSecMain({handleScrollSecondMain}) {
  const {t} = useTranslation()
  return (
    <button className="scrollBtn secondBtn"  onClick={handleScrollSecondMain}>
      {t("Header.More")}
    </button>
  );
}