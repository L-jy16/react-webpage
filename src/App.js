import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'

import Header  from './components/Header'
import Main  from './components/Main'
import Footer  from './components/Footer'
import Slider  from './components/Slider'
import Image  from './components/Image'
import ImgText  from './components/ImgText'
import Card  from './components/Card'
import Banner  from './components/Banner'
import Text  from './components/Text'

const App = () => {
	return (
		<>
			<Header element="IropkeBatang" />
			<Main>
				<Slider />
				<Image element="nexon section" title="포트폴리오가 실력이다."/>
				<ImgText element="nexon section" tilte="이미지 텍스트 유형"/>
				<Card element="nexon section" title="포토폴리오 공부"/>
				<Banner element="nexon" title="배너영역"/>
				<Text element="nexon section" title="텍스트 유형" />
			</Main>
			<Footer element="nexon section"/>
		</>
	)
}

export default App