import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../SwichLanguage/SwichLanguage';

export default function NavBar({ globalImg, navbar }) {
  const { t } = useTranslation();
  const [lang, setLangId] = useState(+window.localStorage.getItem('id') || 0);

  const changeLangId = (id) => {
    window.localStorage.setItem('id', id);
    setLangId(id);
  }

  const languages = [
    { name: 'EN', code: 'en' },
    { name: 'ՀԱՅ', code: 'am' },
    { name: 'РУ', code: 'ru' }
  ];

  return (
    <nav className='header_nav'>
      <img src={globalImg[1]} alt="" className="header_logo" />
      <ul className='header_ul'>
        {navbar.map((el, index) => (
          <li className='header_li' key={index}>
            <NavLink
              className={({ isActive, isPending, isTransitioning }) => [
                isPending ? "pending" : "nav_a",
                isActive ? "active" : "nav_a",
                isTransitioning ? "transitioning" : "nav_a",
              ].join(" ")}
              to={`/${el}`}
            >
              {t(`Header.Navbar.${el}`)}
            </NavLink>
            <div className="m-header-language-holder">
             
            </div>
          </li>
        ))}
         {languages.map((langItem, langIndex) => (
                <span
                  key={langIndex}
                  className={lang === langIndex ? "m-header-language active" : "m-header-language nav_a"}
                  onClick={() => changeLangId(langIndex)}
                >
                  <LanguageSwitcher l={langItem.name} changeL={langItem.code}  />
                </span>
              ))}
      </ul>
    </nav>
  );
}