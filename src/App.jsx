import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"


function App() {
	
	const [lang, setLang] = React.useState("uz");
	return (
		<>
		<Header lang={lang} setLang={setLang}/>
		<Main lang={lang}/>
		<Footer lang={lang}/>
		</>
		);
	}
	
	export default App;
	