import React from 'react';

import Hero from '../Hero/Hero';

function Main ({lang}) {
	return (
		<main className='main'>
			<Hero lang={lang}/>
		</main>
	);
}

export default Main;
