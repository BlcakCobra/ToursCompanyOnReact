import React from 'react'
import { useTranslation } from 'react-i18next';
export default function Card({ title, description, className,img }) {
   const {t} = useTranslation()
    return (
      <div className={`cards ${className}`} style={{backgroundImage: `url(${img})`}}>
        <h5>{t("Header.CardTitle.1.title")}</h5>
        <p className="cardsp">{t("Header.CardTitle.1.description")}</p>
      </div>
    );
  }