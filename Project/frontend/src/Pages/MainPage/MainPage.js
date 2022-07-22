import React from 'react'
import News from '../../Components/News/News';
import Parallax from '../../Components/Parallax/Parallax';
import OurWork from '../../Components/OurWork/OurWork';
import MediaList from '../../Components/MediaList/MediaList';
import Blog from '../../Components/Blog/Blog';
import About from '../../Components/About/About';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import Contacts from '../../Components/Contacts/Contacts';
import Header from '../../Components/Header/Header';
import Ability from '../../Components/Ability/Ability';
import Message from '../../Components/Message/Message';
import DateComponent from '../../Components/DateComponent/DateComponent';
import SSS from '../../Components/SSS/SSS';
import TodoPage from '../TodoPage/TodoPage';
//import Carousel from '../../Components/Carousel/Carousel';

function MainPage() {
  return (
    <>
    <Header/>
      <main>
      {/* <Carousel/> */}
      <Ability/>
      <Parallax/>
      
      <News/>
      <OurWork/>
      <MediaList/>
      <Blog/>
      <Message/>
      <DateComponent/>
      <SSS/>
      <About/>
      <TodoPage/>
      <WhatWeDo/>
      <Contacts/>
      </main>
    </>
  )
}

export default MainPage