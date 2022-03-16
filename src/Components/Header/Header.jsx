import React from 'react';
import './Header.scss';
import languages from "../../Localization/languages";


function Header({lang, setLang}) {
	console.log(lang);
	
	return (
		<header className='header'>
		<div className='container'>

		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<a className="nav__link" href="#link">{languages[lang].header.nav.navItem1}</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#link">{languages[lang].header.nav.navItem2}</a>
				</li>
			</ul>
		</nav>
		
		<select value={lang} onChange={(evt) => setLang(evt.target.value)}>
		<option value="uz">UZ</option>
		<option value="ru">RU</option>
		<option value="en">EN</option>
		</select>
		
		</div>
		</header>
		);
	}
	
	export default Header;
	